"use client";
import { useQuery } from "@tanstack/react-query";
import { getPostsQuery } from "@/store/posts/calls"; // Assume this is a function to fetch post by ID
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";

const PostDetail = ({ params }: { params: { id: number | string } }) => {
  const { data: post, isLoading } = useQuery({
    ...getPostsQuery({ id: params?.id }),
  });
  const router = useRouter();
  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-100 mb-4 hover:underline transition duration-300">
          {post?.title}
        </h1>
        <p className="text-gray-300 mb-6">{post?.content}</p>
        <div className="flex justify-end">
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg shadow transition duration-300 transform hover:scale-105"
            onClick={() => router.back()} // Go back to the previous page
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
