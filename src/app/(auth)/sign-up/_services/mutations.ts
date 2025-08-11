"use server";

import {
  signUpSchema,
  SignUpSchema,
} from "@/app/(auth)/sign-up/_types/signUpSchema";
import db from "@/lib/db";
import { executeAction } from "@/lib/executeAction";
import { hashPassword } from "@/lib/utils";

const signUp = async (data: SignUpSchema) => {
  return await executeAction({
    actionFn: async () => {
      const validatedData = signUpSchema.parse(data);
      
      // Check if user already exists
      const existingUser = await db.user.findUnique({
        where: {
          email: validatedData.email,
        },
      });

      if (existingUser) {
        throw new Error("User with this email already exists");
      }

      const hashedPassword = await hashPassword(validatedData.password);

      await db.user.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          password: hashedPassword,
          role: "USER", // Default role
        },
      });
    },
  });
};

export { signUp };
