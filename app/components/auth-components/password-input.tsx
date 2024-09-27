/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import InputBox from "./input-box";

type PasswordInputProps = {
  register: any;
  errors: any;
};
const PasswordInput = ({ register, errors }: PasswordInputProps) => {
  return (
    <InputBox label="Password">
      <input
        id="password"
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters long",
          },
        })}
        className="w-full p-3 rounded bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your password"
      />
      {errors.password && (
        <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
      )}
    </InputBox>
  );
};

export default PasswordInput;
