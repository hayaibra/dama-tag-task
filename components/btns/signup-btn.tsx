import Link from "next/link";
import React from "react";
import CustomBtn from "./custom-btn";
import { ROUTES } from "@/data";

const SignupBtn = () => {
  return (
    <Link href={ROUTES.signUp}>
      <CustomBtn className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded transition duration-300">
        Sign Up
      </CustomBtn>
    </Link>
  );
};

export default SignupBtn;
