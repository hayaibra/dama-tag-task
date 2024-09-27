"use client";

import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/lib";
import { useRouter } from "next/navigation";
import {
  AuthBox,
  EmailInput,
  PasswordInput,
} from "@/app/components/auth-components";
import { SubmitBtn } from "@/app/components/btns";
import { ROUTES } from "@/data";

interface FormData {
  email: string;
  password: string;
}

const SignUp = () => {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
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
      await createUserWithEmailAndPassword(email, password);
      router.push(ROUTES.signIn);
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthBox
      title="Sign Up"
      question="Already have an account?"
      link={ROUTES.signIn}
      linkTitle="SignIn"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />

        <SubmitBtn btnTitle="Sign Up" />
      </form>
    </AuthBox>
  );
};

export default SignUp;
