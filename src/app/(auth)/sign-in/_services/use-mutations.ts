import { signIn, signOut } from "@/app/(auth)/sign-in/_services/mutations";
import { SignInSchema } from "@/app/(auth)/sign-in/_types/signInSchema";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useSignIn = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: SignInSchema) => {
      return await signIn(data);
    },
    onSuccess: () => {
      toast.success("Signed in successfully!");
      router.replace("/client");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to sign in");
    },
  });
};

const useSignOut = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      toast.success("Signed out successfully!");
      router.push("/");
    },
    onError: (error: Error) => {
      toast.error(error.message || "Failed to sign out");
    },
  });
};

export { useSignIn, useSignOut };
