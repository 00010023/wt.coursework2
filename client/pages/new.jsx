import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Markdown from "../components/Markdown";

const NewPostPage = ({ server, documentation }) => {
  const [isProcessing, setProcess] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [postText, setPostText] = useState("");
  const [createText, setCreateText] = useState("Create Post");
  const [previewC, setPreview] = useState("# Preview for content will be here");

  const preview = () => {
    if (postText === "") {
      alert("Nothing to preview bud...");
    } else {
      setPreview(postText);
    }
  };

  const raw = {
    title: postTitle,
    author: postAuthor,
    snippet: postDescription,
    content: postText,
  };

  const createPost = () => {
    setCreateText("Processing...");
    if (!isProcessing) {
      if (postTitle === "") {
        alert("You forgot to implement title of the post!");
        setCreateText("Create Post");
      } else if (postDescription === "") {
        alert("You forgot to implement description for the post!");
        setCreateText("Create Post");
      } else if (postAuthor === "") {
        alert("You forgot to implement author of the post!");
        setCreateText("Create Post");
      } else if (postText === "") {
        alert("You forgot to type some content!");
        setCreateText("Create Post");
      } else {
        setProcess(true);
        fetch(server + "/api/v1/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(raw),
          redirect: "follow",
        })
          .then((result) =>
            setTimeout(async () => {
              const text = await result.json();
              await Router.push("/posts/" + text._id);
            }, 500)
          )
          .catch((error) =>
            setTimeout(() => {
              Router.push("/404");
            }, 1000)
          );
      }
    } else {
      alert("HOLD ON BUD! Your request is already pending!");
      setCreateText("Create Post");
    }
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
      <Header subtitle="Create a post" docsUrl={documentation} />
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-8 mb-16">
        <Link href="/posts">
          <a className="link">&lt;- Back to overview</a>
        </Link>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <label htmlFor="query" className="font-medium sr-only">
            Title
          </label>
          <input
            id="title"
            className="block w-full px-4 py-2 leading-normal bg-white border border-gray-200 rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300"
            type="text"
            placeholder={"Title"}
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <label htmlFor="query" className="font-medium sr-only">
            Description
          </label>
          <input
            id="desc"
            className="block w-full px-4 py-2 leading-normal bg-white border border-gray-200 rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300"
            type="text"
            placeholder={"Description"}
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          />
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <label htmlFor="query" className="font-medium sr-only">
            Author
          </label>
          <input
            id="auth"
            className="block w-full px-4 py-2 leading-normal bg-white border border-gray-200 rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300"
            type="text"
            placeholder={"Author"}
            value={postAuthor}
            onChange={(e) => setPostAuthor(e.target.value)}
          />
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <label htmlFor="query" className="font-medium sr-only">
            Content
          </label>
          <textarea
            id="content"
            className="block w-full h-80 px-4 bg-white border border-gray-200 rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300 resize-y"
            placeholder={"Content (Markdown)"}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <div className="items-center justify-center text-center">
            <div className="grid lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
              <a onClick={createPost}>
                <div className="mt-4 py-2 mx-5 px-2 border rounded bg-white text-black hover:text-white hover:bg-black active:bg-gray-700 select-none">
                  {createText}
                </div>
              </a>
              <a onClick={preview}>
                <div className="mt-4 py-2 mx-5 px-2 border rounded bg-white text-black hover:text-white hover:bg-black active:bg-gray-700 select-none">
                  Preview the post
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <div className="block w-full px-4 py-2 leading-normal bg-white border border-gray-200 rounded-lg outline-none">
            <Markdown
              source={previewC}
              displayURL={previewC}
              sourceURL={previewC}
              baseURL={previewC}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const server = process.env.DATABASE;
  const documentation = process.env.DOCUMENTATION;
  return {
    props: {
      server,
      documentation,
    },
  };
}

export default NewPostPage;
