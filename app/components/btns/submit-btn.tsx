import React from "react";

type SubmitBtnProps = {
  btnTitle: string;
};
const SubmitBtn = ({ btnTitle }: SubmitBtnProps) => {
  return (
    <div className="mb-4">
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded transition duration-300"
      >
        {btnTitle}
      </button>
    </div>
  );
};

export default SubmitBtn;
