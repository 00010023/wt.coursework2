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
  const [isProcessing, setProcess] = useState(false);
  const [postTitle, setPostTitle] = useState(post.title);
  const [postDescription, setPostDescription] = useState(post.snippet);
  const [postAuthor, setPostAuthor] = useState(post.author);
  const [postText, setPostText] = useState(post.content);
  const [editText, setEditText] = useState("Edit Post");
  const [previewC, setPreview] = useState(post.content);

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

  const editPost = () => {
    setEditText("Processing...");
    if (!isProcessing) {
      if (postTitle === "") {
        alert("You left title empty");
        setEditText("Edit Post");
      } else if (postDescription === "") {
        alert("You left snippet empty!");
        setEditText("Edit Post");
      } else if (postAuthor === "") {
        alert("You left author empty!");
        setEditText("Edit Post");
      } else if (postText === "") {
        alert("You left content empty!");
        setEditText("Edit Post");
      } else {
        setProcess(true);
        fetch(server + "/api/v1/posts/" + post._id, {
          method: "PUT",
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
          .catch(() =>
            setTimeout(() => {
              Router.push("/404");
            }, 1000)
          );
      }
    } else {
      alert(
        "HOLD ON BUD! No need to flood... Your request is already pending!"
      );
      setEditText("Edit Post");
    }
  };

  const [deleteText, setDeleteText] = useState("Delete the post");
  const deletePost = () => {
    setDeleteText("Processing...");
    fetch(server + "/api/v1/posts/" + post._id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: null,
      redirect: "follow",
    })
      .then(() =>
        setTimeout(() => {
          Router.push("/posts");
        }, 500)
      )
      .catch(() =>
        setTimeout(() => {
          Router.push("/404");
        }, 1000)
      );
  };

  return (
    <>
      <Head>
        <title>{post.title} | Genemator's</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.snippet} />
      </Head>
      <Header subtitle={post.title} docsUrl={documentation} />
      <Notification news="This blog app is dedicated to fulfill WIUT's requirements" />
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 py-8 mb-16">
        <Link href="/posts">
          <a className="link">&lt;- Back to overview</a>
        </Link>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <label htmlFor="query" className="font-medium">
            Title {post.title}
          </label>
          <input
            id="title"
            className="block w-full px-4 py-2 leading-normal bg-white border border-gray-200 rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300"
            type="text"
            placeholder={"Type a title..."}
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <label htmlFor="query" className="font-medium">
            Description
          </label>
          <input
            id="desc"
            className="block w-full px-4 py-2 leading-normal bg-white border border-gray-200 rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300"
            type="text"
            placeholder={"Type some description..."}
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          />
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <label htmlFor="query" className="font-medium">
            Author
          </label>
          <input
            id="auth"
            className="block w-full px-4 py-2 leading-normal bg-white border border-gray-200 rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300"
            type="text"
            placeholder={"Type the author..."}
            value={postAuthor}
            onChange={(e) => setPostAuthor(e.target.value)}
          />
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <label htmlFor="query" className="font-medium">
            Content
          </label>
          <textarea
            id="content"
            className="block w-full h-80 px-4 bg-white border border-gray-200 rounded-lg outline-none shadow hover:shadow-sm focus:shadow-sm appearance-none focus:border-gray-300 hover:border-gray-300 resize-y"
            placeholder={"Type your content... (Markdown)"}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 mt-8">
          <div className="items-center justify-center text-center">
            <div className="grid lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
              <a onClick={editPost}>
                <div className="mt-4 py-2 mx-5 px-2 border rounded bg-white text-black hover:text-white hover:bg-black active:bg-gray-700 select-none">
                  {editText}
                </div>
              </a>
              <a onClick={preview}>
                <div className="mt-4 py-2 mx-5 px-2 border rounded bg-white text-black hover:text-white hover:bg-black active:bg-gray-700 select-none">
                  Preview the post
                </div>
              </a>
              <a onClick={deletePost}>
                <div className="mt-4 py-2 mx-5 px-2 border rounded bg-white text-black hover:text-white hover:bg-red-700 active:bg-red-400 select-none">
                  {deleteText}
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
