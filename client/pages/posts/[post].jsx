import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Markdown from "../../components/Markdown";
import Notification from "../../components/Notification";

const server = process.env.DATABASE;

const NewsPostPage = ({ post, server, documentation }) => {
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
  const [deleteText, setDeleteText] = useState("Delete the post");
  const deletePost = () => {
    setDeleteText("Processing...");
    fetch(server + "/api/v1/posts/" + post._id, options)
      .then((result) =>
        setTimeout(() => {
          Router.push("/posts");
        }, 500)
      )
      .catch((error) =>
        setTimeout(() => {
          Router.push("/404");
        }, 1000)
      );
  };

  return (
    <>
      <Head>
        <title>{post.title} | Gendy's</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.snippet} />
      </Head>
      <Header subtitle={post.title} docsUrl={documentation} />
      <Notification news="This blog app is dedicated to fulfill WIUT's requirements" />
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
        <div className="mt-8">
          <Markdown
            source={post.content}
            displayURL={`${server}/api/v1/posts/${post._id}/md`}
            sourceURL={`${server}/api/v1/posts/${post._id}/md`}
            baseURL={`${server}/api/v1/posts/${post._id}/md`}
          />
        </div>
        <div className="items-center justify-center text-center">
          <div className="grid lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
            <Link href={"/edit/[post]"} as={"/edit/" + post._id}>
              <a>
                <div className="mt-4 py-2 mx-1 px-2 border rounded bg-white text-black hover:text-white hover:bg-black active:bg-gray-700 select-none">
                  Edit the post
                </div>
              </a>
            </Link>
            <a onClick={deletePost}>
              <div className="mt-4 py-2 mx-1 px-2 border rounded bg-white text-black hover:text-white hover:bg-red-700 active:bg-red-400 select-none">
                {deleteText}
              </div>
            </a>
            <Link href="/new">
              <a>
                <div className="mt-4 py-2 mx-1 px-2 border rounded bg-white text-black hover:text-white hover:bg-green-700 active:bg-green-400 select-none">
                  Create another
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const documentation = process.env.DOCUMENTATION;
  const post = await fetch(
    server + "/api/v1/posts/" + context.params.post
  ).then(async (res) => {
    return {
      code: res.status,
      result: await res.json(),
    };
  });

  if (post.code !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: post.result,
      server,
      documentation,
    },
  };
}

export default NewsPostPage;
