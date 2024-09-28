import React from "react";
import Link from "next/link";
import { Post } from "../types";
import { ROUTES } from "@/data";

const PostCard = (props: Post) => {
  const { id, title, content } = props;
  return (
    <Link href={ROUTES.posts(id as string)} className="m-8">
      <li className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
        <p className="text-gray-300">{content}</p>
        <span className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300">
          Read more &rarr;
        </span>
      </li>
    </Link>
  );
};

export default PostCard;
