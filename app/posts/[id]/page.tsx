"use client";
import { useQuery } from "@tanstack/react-query";
import { getPostsQuery } from "@/store/posts/calls"; // Assume this is a function to fetch post by ID
import Loading from "@/app/components/loading";
import { useRouter } from "next/navigation";
// import Loading from "@/components/loading";

const PostDetail = ({ params }: { params: { id: string } }) => {
  const { data: post, isLoading } = useQuery({
    ...getPostsQuery({ id: params?.id }),
  });
  const router = useRouter();
  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-100 mb-6">
          {post?.title}
        </h1>
        <p className="text-gray-300 mt-2">{post?.content}</p>
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition duration-300"
          onClick={() => router.back()} // Go back to the previous page
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
