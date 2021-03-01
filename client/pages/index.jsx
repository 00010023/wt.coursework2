import React from "react";
import Link from "next/link";
import { server } from "../constants";
import Meta from "../components/Meta";
import Footer from "../components/Footer";

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Meta />

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold pt-8">
          Welcome to <a className="text-blue-600">Blog!</a>
        </h1>

        <p className="mt-3 text-2xl">
          This application is dedicated to fulfill{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            WIUT
          </code>
          's requirements
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full p-8">
          {posts.map((post) => (
            <Link href={`/post/${post._id}`}>
              <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">{post.title} &rarr;</h3>
                <p className="mt-4 text-xl ">{post.snippet}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(server + "/api/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
