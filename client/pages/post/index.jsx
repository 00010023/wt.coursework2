import React from "react";
import Link from "next/link";
import useSWR from "swr";
import { server } from "../../constants";
import Footer from "../../components/Footer";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home({ posts }) {
  const { data } = useSWR(server + "/posts", fetcher, { initialData: posts });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Posts | Serverland</title>
        <meta property="og:title" content="Posts of Serverland" />
        <meta
          property="og:description"
          content="This website is dedicated to fulfill WIUT's requirements"
        />
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center mb-8">
        <h1 className="text-6xl font-bold">
          My <a className="text-blue-600">Posts</a>!
        </h1>

        <p className="mt-3 text-2xl">
          This application is dedicated to fulfill{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            WIUT
          </code>
          's requirements
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {posts.map((post) => (
            <Link href={`/post/${post._id}`} key={post._id}>
              <a className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">{post.title} &rarr;</h3>
                <p className="mt-4 text-xl ">{post.snippet}</p>
              </a>
            </Link>
          ))}
          {posts.map((post) => (
            <Link href={`/post/${post._id}`} key={post._id}>
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
  const res = await fetch(server + "/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
