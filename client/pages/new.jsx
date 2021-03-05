import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Markdown from "../components/Markdown";

const server = process.env.DATABASE;

const NewPostPage = () => {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: null,
    redirect: "follow",
  };
  const [postText, setPostText] = useState("");
  const createPost = () => {
    setDeleteText("Hold on a second, processing...");
    fetch(server + "/api/v1/posts/", options)
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
        <title>Create a post | Genemator's</title>
        <meta property="og:title" content="Create A Post" />
        <meta
          property="og:description"
          content="Creating a post in Gendy's Blog"
        />
      </Head>
      <Header subtitle="Create a post" />
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-8 mb-16">
        <Link href="/posts">
          <a className="link">&lt;- Back to overview</a>
        </Link>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <label htmlFor="query" className="font-medium sr-only">
            Search
          </label>
          <input
            id="query"
            className="block w-full px-4 py-2 leading-normal bg-white border border-gray-200 rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300 mt-1"
            type="text"
            placeholder={"Title"}
          />
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <a href={"/edit/"}>
            <div className="mt-4 text-center border rounded bg-white text-black hover:text-white hover:bg-black active:bg-gray-700 select-none">
              Create the post
            </div>
          </a>
          <a href={"/edit/"}>
            <div className="mt-4 text-center border rounded bg-white text-black hover:text-white hover:bg-black active:bg-gray-700 select-none">
              Preview the post
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewPostPage;
