import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type SignInSchema = z.infer<typeof signInSchema>;

const signInDefaultValues: SignInSchema = {
  email: "",
  password: "",
};

export { signInDefaultValues, signInSchema, type SignInSchema };
