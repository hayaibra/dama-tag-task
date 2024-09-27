/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { auth } from "@/lib";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/data";
import {
  AuthBox,
  EmailInput,
  PasswordInput,
} from "@/components/auth-components";
import { SubmitBtn } from "@/components/btns";
import ErrorNotification from "@/components/error-notification";
import { useCreateFireBaseUser } from "@/hooks/create-fire-base-user";

interface FormData {
  email: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter();
  const { error, createUserWithEmailAndPassword, loading } =
    useCreateFireBaseUser(auth, {
      onSuccess: () => {
        router.push(ROUTES.signIn);
        reset();
      },
      onError: () => {
        reset();
      },
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const { email, password } = data;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <>
      <AuthBox
        title="Sign Up"
        question="Already have an account?"
        link={ROUTES.signIn}
        linkTitle="SignIn"
      >
        {error && <ErrorNotification message={error.message} />}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />

          <SubmitBtn btnTitle="Sign Up" loading={loading} />
        </form>
      </AuthBox>
    </>
  );
};

export default SignUp;
