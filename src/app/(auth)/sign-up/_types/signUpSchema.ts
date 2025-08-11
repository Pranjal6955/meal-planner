import { passwordSchema, requiredStringSchema } from "@/lib/zod-schemas";
import { z } from "zod";

const signUpSchema = z.object({
  name: requiredStringSchema,
  email: z.string().email("Please enter a valid email address"),
  password: passwordSchema,
  confirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpSchema = z.infer<typeof signUpSchema>;

const signUpDefaultValues: SignUpSchema = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export { signUpDefaultValues, signUpSchema, type SignUpSchema };
