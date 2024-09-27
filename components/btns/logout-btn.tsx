import React from "react";
import CustomBtn from "./custom-btn";
import { auth } from "@/lib";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/data";

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("User");
    auth.signOut();
    router.push(ROUTES.home);
  };

  return (
    <CustomBtn
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded transition duration-300"
    >
      Logout
    </CustomBtn>
  );
};

export default LogoutBtn;
