import React from "react";
import Link from "next/link";
import { Post } from "../types";
import { ROUTES } from "@/data";

const PostCard = (props: Post) => {
  const { id, title, content } = props;
  return (
    <Link href={ROUTES.posts(id as string)} className="m-8">
      <li className="bg-gray-700 hover:bg-gray-600 p-4  rounded-lg transition duration-300">
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
        <p className="text-gray-300 mt-2">{content}</p>
      </li>
    </Link>
  );
};

export default PostCard;
