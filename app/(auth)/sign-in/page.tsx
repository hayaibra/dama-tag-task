/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  AuthBox,
  EmailInput,
  PasswordInput,
} from "@/components/auth-components";
import { SubmitBtn } from "@/components/btns";
import ErrorNotification from "@/components/error-notification";
import { ROUTES } from "@/data";
import { useLoginFireBaseUser } from "@/hooks/login-fire-base-user";
import { auth } from "@/lib";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const router = useRouter();
  const { error, signInWithEmailAndPassword, loading } = useLoginFireBaseUser(
    auth,
    {
      onSuccess: () => {
        router.push(ROUTES.home);
        reset();
      },
      onError: () => {
        reset();
      },
    }
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      <AuthBox
        title="Sign In"
        question="Don't have an account?"
        link={ROUTES.signUp}
        linkTitle="Sign Up"
      >
        {error && <ErrorNotification message={error.message} />}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <SubmitBtn btnTitle="Sign In" loading={loading} />
        </form>
      </AuthBox>
    </>
  );
};

export default SignIn;
