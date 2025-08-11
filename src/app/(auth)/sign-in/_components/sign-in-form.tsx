"use client";
import { useSignIn } from "@/app/(auth)/sign-in/_services/use-mutations";
import {
  signInDefaultValues,
  signInSchema,
  SignInSchema,
} from "@/app/(auth)/sign-in/_types/signInSchema";
import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/components/ui/controlled/controlled-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const SignInForm = () => {
  const form = useForm<SignInSchema>({
    defaultValues: signInDefaultValues,
    resolver: zodResolver(signInSchema),
  });

  const signInMutation = useSignIn();

  const onSubmit: SubmitHandler<SignInSchema> = (data) => {
    signInMutation.mutate(data);
  };

  return (
    <FormProvider {...form}>
      <form
        className="w-full space-y-6 rounded-xl border bg-card p-8 shadow-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Welcome Back</h2>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        <div className="space-y-4">
          <ControlledInput<SignInSchema> 
            name="email" 
            label="Email" 
            placeholder="Enter your email"
            type="email"
          />
          <ControlledInput<SignInSchema>
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <Button className="w-full" size="lg" isLoading={signInMutation.isPending}>
          Sign In
        </Button>

        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

export { SignInForm };
