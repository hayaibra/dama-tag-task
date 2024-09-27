import React from "react";
import { User } from "../types";
import Link from "next/link";

type WelcomeProps = {
  user?: { email: User["email"] } | null;
};

const WelcomeFn = (props: WelcomeProps) => {
  return (
    <div className="mb-6">
      {props.user ? (
        <p className="text-lg font-medium text-gray-200">
          Welcome <span className="text-blue-400">{props?.user?.email}</span>
        </p>
      ) : (
        <p className="text-lg text-gray-400 text-center">
          Please{" "}
          <Link href="/sign-in" className="text-blue-400 underline">
            login
          </Link>{" "}
          or{" "}
          <Link href="/sign-in" className="text-blue-400 underline">
            signup
          </Link>
          .
        </p>
      )}
    </div>
  );
};

export default WelcomeFn;
