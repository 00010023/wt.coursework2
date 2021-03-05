import useSWR from "swr";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Markdown from "../../components/Markdown";

const server = process.env.DATABASE;

const NewsPostPage = ({ post, server }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data } = useSWR(server + "/api/v1/posts/", fetcher, {
    initialData: post,
  });
  const router = useRouter();
  const published = () => {
    if (data.createdAt === data.updatedAt) return data.createdAt;
    if (data.createdAt !== data.updatedAt) return data.updatedAt;
  };
  const date = new Date(published());
  const format = new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: null,
    redirect: "follow",
  };

  const checkPost = () => {
    console.log(server + "/api/v1/posts/" + data._id);
  };

  const deletePost = () => {
    fetch(server + "/api/v1/posts/" + data._id, options)
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    router.push("/posts");
  };

  return (
    <>
      <Head>
        <title>{data.title} | Genemator's</title>
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.snippet} />
        <meta property="telegram" />
      </Head>
      <Header subtitle={data.title} />
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-8 mb-16">
        <Link href="/posts">
          <a className="link">&lt;- Back to overview</a>
        </Link>

        <h1 className="tracking-tight font-bold text-5xl leading-10 mt-4 py-8">
          {data.title}
        </h1>
        <p className="text-gray-600 mt-3 leading-tight">
          {format.format(date)}
        </p>
        <p className="text-gray-600 mt-3 leading-tight">{data.author}</p>
        <div className="telegram-post mt-8">
          <Markdown source={data.content} />
        </div>
        <a href={"/" + data._id}>
          <div className="mt-4 text-center border rounded bg-white text-black hover:text-white hover:bg-black select-none">
            Edit the post
          </div>
        </a>
        <a onClick={deletePost}>
          <div className="mt-4 text-center border rounded bg-white text-black hover:text-white hover:bg-red-700 select-none">
            Delete the post
          </div>
        </a>
        <a onClick={checkPost}>
          <div className="mt-4 text-center border rounded bg-white text-black hover:text-white hover:bg-yellow-300 select-none">
            Check the post
          </div>
        </a>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const post = await fetch(
    server + "/api/v1/posts/" + context.params.post
  ).then(async (res) => {
    return res.json();
  });

  return {
    props: {
      post,
      server,
    },
  };
}

export default NewsPostPage;
