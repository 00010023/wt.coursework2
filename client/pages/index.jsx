import React from "react";
import Link from "next/link";
import useSWR from "swr";
import { server } from "../constants";
import Footer from "../components/Footer";
import Head from "next/head";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home({ posts }) {
  const { data } = useSWR(server + "/posts", fetcher, { initialData: posts });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Home | Serverland</title>
        <meta property="og:title" content="Welcome to Serverland" />
        <meta
          property="og:description"
          content="This website is dedicated to fulfill WIUT's requirements"
        />
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <Link href={"/post"}>
            <a className="text-blue-600"> My Blog!</a>
          </Link>
        </h1>

        <p className="mt-3 text-2xl">
          This application is dedicated to fulfill{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            WIUT
          </code>
          's requirements
        </p>
        <Link href={"/post"}>
          <a className="mt-3 text-2xl border rounded-md p-3">
            Browse
          </a>
        </Link>
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
