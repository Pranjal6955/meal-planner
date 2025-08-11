"use client";
import { useSignUp } from "@/app/(auth)/sign-up/_services/use-mutations";
import {
  signUpDefaultValues,
  signUpSchema,
  SignUpSchema,
} from "@/app/(auth)/sign-up/_types/signUpSchema";
import { Button } from "@/components/ui/button";
import { ControlledInput } from "@/components/ui/controlled/controlled-input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const SignUpForm = () => {
  const form = useForm<SignUpSchema>({
    defaultValues: signUpDefaultValues,
    resolver: zodResolver(signUpSchema),
  });

  const signUpMutation = useSignUp();

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    signUpMutation.mutate(data);
  };

  return (
    <FormProvider {...form}>
      <form
        className="w-full space-y-6 rounded-xl border bg-card p-8 shadow-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">Create Account</h2>
          <p className="text-muted-foreground">
            Sign up to start planning your meals
          </p>
        </div>

        <div className="space-y-4">
          <ControlledInput<SignUpSchema> 
            name="name" 
            label="Full Name" 
            placeholder="Enter your full name"
          />
          <ControlledInput<SignUpSchema> 
            name="email" 
            label="Email" 
            placeholder="Enter your email"
            type="email"
          />
          <ControlledInput<SignUpSchema>
            name="password"
            label="Password"
            type="password"
            placeholder="Create a password"
          />
          <ControlledInput<SignUpSchema>
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <Button className="w-full" size="lg" isLoading={signUpMutation.isPending}>
          Create Account
        </Button>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

export { SignUpForm };
