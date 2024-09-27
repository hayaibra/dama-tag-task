/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib";
import { onAuthStateChanged } from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import getPostsQuery from "@/store/posts/calls";
import Loading from "./components/loading";
import PostCard from "./components/post-card";
import WelcomeFn from "./components/welcome-fn";
import { LoginBtn, LogoutBtn, SignupBtn } from "./components/btns";

export default function Home() {
  const [user, setUser] = useState<null | { email: string }>(null);
  const { data: posts, isLoading } = useQuery({ ...getPostsQuery({ id: "" }) });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user ? { email: user.email! } : null);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <header className="w-full bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">DamaTag</h1>
          <div>
            {user ? (
              <LogoutBtn />
            ) : (
              <>
                <LoginBtn />
                <SignupBtn />
              </>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <WelcomeFn user={user} />

          {user && (
            <>
              <h1 className="text-3xl font-extrabold text-gray-100 mb-6">
                Posts
              </h1>

              <ul className="space-y-4">
                {posts?.map((post: any) => (
                  <PostCard {...post} key={post.id} />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
