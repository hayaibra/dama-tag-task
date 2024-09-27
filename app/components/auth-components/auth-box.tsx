import Link from "next/link";
import React from "react";

interface AuthBoxProps {
  children: React.ReactNode;
  title: string;
  link: string;
  linkTitle: string;
  question: string;
}
const AuthBox = ({
  children,
  title,
  link,
  linkTitle,
  question,
}: AuthBoxProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
          {title}
        </h2>
        {children}

        <div className="text-center mt-4">
          <p className="text-gray-400">
            {question}{" "}
            <Link href={link} className="text-blue-400 hover:underline">
              {linkTitle}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthBox;
