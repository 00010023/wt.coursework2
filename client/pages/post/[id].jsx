import React from "react";
import { server } from "../../constants";
import Meta from "../../components/Meta";
import Footer from "../../components/Footer";

const Posts = ({ post }) => {
  const publishDate = () => {
    if (post.createdAt === post.updatedAt) {
      const date = new Date(post.createdAt);
      const format = new Intl.DateTimeFormat(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      return "Created at " + format.format(date) + " by " + post.author;
    } else {
      const date = new Date(post.updatedAt);
      const format = new Intl.DateTimeFormat(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
      return "Updated at " + format.format() + " by " + post.author;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Meta />

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold pt-8">{post.title}</h1>
        <p className="mt-3 text-2xl">{publishDate()}</p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full p-8">
          <div className="p-6 text-center border rounded-xl">
            <p className="text-xl">{post.content}</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const post = await fetch(server + `/api/posts/${context.params.id}`).then(
    async (res) => {
      return res.json();
    }
  );

  return {
    props: {
      post,
    },
  };
}

export default Posts;
