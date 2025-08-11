"use server";
import {
  signInSchema,
  SignInSchema,
} from "@/app/(auth)/sign-in/_types/signInSchema";
import { signIn as nextAuthSignIn, signOut as authSignOut } from "@/lib/auth";
import { executeAction } from "@/lib/executeAction";

const signIn = async (data: SignInSchema) => {
  return await executeAction({
    actionFn: async () => {
      const validatedData = signInSchema.parse(data);
      const result = await nextAuthSignIn("credentials", {
        email: validatedData.email,
        password: validatedData.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return result;
    },
  });
};

const signOut = () => {
  return executeAction({
    actionFn: authSignOut,
  });
};

export { signIn, signOut };
