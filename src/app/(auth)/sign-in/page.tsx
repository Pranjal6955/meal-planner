import { SignInForm } from "./_components/sign-in-form";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="w-full max-w-md">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
