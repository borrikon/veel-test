import Link from "next/link";
import SignInForm from "./_components/signin-form/SIgnInForm";

function SignIn() {
  return (
    <section className="flex flex-col gap-4 justify-center h-full">
      <h1 className="text-3xl text-center font-bold">Sign In</h1>

      <SignInForm />
      <p className="text-center">
        Don&apos;t have an account? Go to:
        <Link
          className="text-blue-500 ml-2 hover:text-blue-600"
          href={"/signup"}
        >
          Sign Up
        </Link>
      </p>
    </section>
  );
}

export default SignIn;
