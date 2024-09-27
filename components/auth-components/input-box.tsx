import React from "react";

interface InputBoxProps {
  children: React.ReactNode;
  label: string;
}
const InputBox = ({ children, label }: InputBoxProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-gray-200 text-sm font-bold mb-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputBox;
