import Link from "next/link";
import SignUpForm from "./_components/signup-form/SignUpFrom";

function SignUp() {
  return (
    <section className="flex flex-col gap-4 justify-center h-full">
      <h1 className="text-3xl text-center font-bold">Sign Up</h1>

      <SignUpForm />
      <p className="text-center">
        Already have an account? Go to:
        <Link
          className="text-blue-500 ml-2 hover:text-blue-600"
          href={"/signin"}
        >
          Sign In
        </Link>
      </p>
    </section>
  );
}

export default SignUp;
