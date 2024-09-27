/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  AuthBox,
  EmailInput,
  PasswordInput,
} from "@/app/components/auth-components";
import { SubmitBtn } from "@/app/components/btns";
// import ErrorNotification from "@/app/components/error-notification";
// import ErrorNotification from "@/app/components/error-notification";
import { ROUTES } from "@/data";
import { auth } from "@/lib";
import { useRouter } from "next/navigation";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      const { email, password } = data;
      const res = await signInWithEmailAndPassword(email, password);
      if (res?.user) {
        const token = await res.user.getIdToken();
        localStorage.setItem("User", token);
      }
      reset();
      router.push("/");
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <>
      <AuthBox
        title="Sign In"
        question="Don't have an account?"
        link={ROUTES.signUp}
        linkTitle="Sign Up"
      >
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <SubmitBtn btnTitle="Sign In" />
        </form>
      </AuthBox>
    </>
  );
};

export default SignIn;
