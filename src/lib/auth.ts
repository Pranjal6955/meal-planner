import db from "@/lib/db";
import { comparePassword, toStringSafe } from "@/lib/utils";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/app/(auth)/sign-in/_types/signInSchema";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: string;
    name?: string | null;
    email: string;
    role?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name?: string | null;
    role?: string | null;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          const validatedCredentials = signInSchema.parse(credentials);

          const user = await db.user.findUnique({
            where: {
              email: validatedCredentials.email,
            },
          });

          if (!user) {
            throw new Error("Invalid email or password");
          }

          const isPasswordValid = await comparePassword(
            validatedCredentials.password,
            user.password,
          );

          if (!isPasswordValid) {
            throw new Error("Invalid email or password");
          }

          return {
            id: toStringSafe(user.id),
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.role = token.role;
      }
      return session;
    },
  },
});
