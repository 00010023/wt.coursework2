import React, { useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Notification from "../../components/Notification";

const server = process.env.DATABASE;

const PostsIndexPage = ({ posts, documentation }) => {
  return (
    <>
      <Head>
        <title>Posts | Genemator's</title>
        <meta property="og:title" content="Page where you can list posts" />
        <meta
          property="og:description"
          content="At this page you can list existing posts in our website!"
        />
      </Head>
      <Header subtitle="Posts" docsUrl={documentation} />
      <Notification news="This blog app is dedicated to fulfill WIUT's requirements" />
      <div className="pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="border-b-2 border-gray-800 pb-10">
            <h2 className="text-4xl font-bold tracking-tight">
              Posts {"<|>"} News
            </h2>
            <div className="mt-3 sm:mt-4">
              <p className="text-xl leading-7 text-black">
                Get more information or read about Genemator's thoughts in this
                page!
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-16 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
            {posts.map((post) => {
              const date = new Date(post.createdAt);
              const format = new Intl.DateTimeFormat(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              });
              return (
                <div key={post._id}>
                  <p className="text-sm leading-5 text-gray-700">
                    <time dateTime={post.createdAt}>{format.format(date)}</time>
                  </p>
                  <Link href={"/posts/[post]"} as={`/posts/${post._id}`}>
                    <a className="block">
                      <h3 className="mt-2 text-xl leading-7 font-semibold text-black">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-600">
                        {post.snippet}
                      </p>
                    </a>
                  </Link>
                  <div className="mt-3">
                    <Link href={"/posts/[post]"} as={`/posts/${post._id}`}>
                      <a className="read-post text-base leading-6 font-semibold transition ease-in-out duration-150">
                        Read post
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="items-end justify-end text-center">
            <Link href="/new">
              <a>
                <div className="mt-4 py-2 mx-1 px-2 border rounded bg-white text-black hover:text-white hover:bg-black active:bg-gray-700 select-none">
                  Create yours
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

export const getServerSideProps = async () => {
  try {
    const documentation = process.env.DOCUMENTATION;
    const res = await fetch(server + "/api/v1/posts/");
    const posts = await res.json();

    if (!posts) {
      return {
        notFound: true,
        redirect: "/posts",
      };
    }

    return {
      props: {
        posts,
        server,
        documentation,
      },
    };
  } catch (err) {
    return {
      notFound: true,
      redirect: "/posts",
    };
  }
};

export default PostsIndexPage;
