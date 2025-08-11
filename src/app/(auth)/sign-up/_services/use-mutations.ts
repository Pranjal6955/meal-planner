import { signUp } from "@/app/(auth)/sign-up/_services/mutations";
import { SignUpSchema } from "@/app/(auth)/sign-up/_types/signUpSchema";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useSignUp = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: SignUpSchema) => {
      return await signUp(data);
    },
    onSuccess: () => {
      toast.success("Account created successfully! Please sign in.");
      router.replace("/sign-in");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to create account");
    },
  });
};

export { useSignUp };
