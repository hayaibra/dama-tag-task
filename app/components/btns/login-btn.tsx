import React from "react";
import CustomBtn from "./custom-btn";
import Link from "next/link";
import { ROUTES } from "@/data";

const LoginBtn = () => {
  return (
    <Link href={ROUTES.signIn}>
      <CustomBtn className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded mr-2 transition duration-300">
        Login
      </CustomBtn>
    </Link>
  );
};

export default LoginBtn;
