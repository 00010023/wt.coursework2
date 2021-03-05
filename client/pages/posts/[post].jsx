import React from "react";
import Head from "next/head";

import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Markdown from "../../components/Markdown";
import Link from "next/link";

const server = process.env.DATABASE;

const NewsPostPage = ({ post }) => {
  const router = useRouter();
  const published = () => {
    if (post.createdAt === post.updatedAt) return post.createdAt;
    if (post.createdAt !== post.updatedAt) return post.updatedAt;
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

  const deletePost = () => {
    fetch(server + "/api/v1/posts/" + post._id, options)
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    router.push("/posts");
  };

  return (
    <>
      <Head>
        <title>{post.title} | Genemator's</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.snippet} />
        <meta property="telegram" />
      </Head>
      <Header subtitle={post.title} />
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-8 mb-16">
        <Link href="/posts">
          <a className="link">&lt;- Back to overview</a>
        </Link>

        <h1 className="tracking-tight font-bold text-5xl leading-10 mt-4 py-8">
          {post.title}
        </h1>
        <p className="text-gray-600 mt-3 leading-tight">
          {format.format(date)}
        </p>
        <p className="text-gray-600 mt-3 leading-tight">{post.author}</p>
        <div className="telegram-post mt-8">
          <Markdown source={post.content} />
        </div>
        <Link href={"/edit/[post]"} as={`/edit/${post._id}`}>
          <a>
            <div className="mt-4 text-center border rounded bg-white text-black hover:text-white hover:bg-black select-none">
              Edit the post
            </div>
          </a>
        </Link>
        <a onClick={deletePost}>
          <div className="mt-4 text-center border rounded bg-white text-black hover:text-white hover:bg-red-700 select-none">
            Delete the post
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
    },
  };
}

export default NewsPostPage;