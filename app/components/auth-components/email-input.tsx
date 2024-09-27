/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import InputBox from "./input-box";

type EmailInputProps = {
  register: any;
  errors: any;
};

const EmailInput = ({ register, errors }: EmailInputProps) => {
  return (
    <InputBox label="Email">
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Invalid email format",
          },
        })}
        className="w-full p-3 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your email"
      />
      {errors.email && (
        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
      )}
    </InputBox>
  );
};

export default EmailInput;
