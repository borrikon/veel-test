"use client";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { authSchema } from "@/lib/schema";
import FormInput from "@/components/form-input/FormInput";
import { z } from "zod";
import { useActionState } from "react";
import { login } from "@/lib/actions";
import LoadingBtn from "@/components/loading-btn";

type AuthSchemaType = z.infer<typeof authSchema>;

function SignInForm() {
  const [state, loginAction, isPending] = useActionState(login, undefined);
  const methods = useForm<AuthSchemaType>({
    resolver: zodResolver(authSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      username: "",
      password: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form action={loginAction} className="flex flex-col gap-4">
        <FormInput
          type="text"
          name="name"
          placeholder="Enter your name"
          label="Name"
        />

        <FormInput
          type="text"
          name="username"
          placeholder="Enter username"
          label="Username"
        />

        <FormInput
          type="password"
          name="password"
          placeholder="Enter your password"
          label="Password"
        />

        <LoadingBtn
          type="submit"
          loading={isPending}
          className="mt-3"
          size="lg"
          text="Sign In"
        />

        <p className="text-red-500 text-center">{state?.error}</p>
      </form>
    </FormProvider>
  );
}

export default SignInForm;
