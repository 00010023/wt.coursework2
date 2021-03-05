import React from "react";
import Head from "next/head";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Markdown from "../../components/Markdown";
import Link from "next/link";
import useSWR from "swr";

const server = process.env.SERVER;
const fetcher = (url) => fetch(url).then((res) => res.json());

const NewsPostPage = ({ post }) => {
    const { data, error } = useSWR(server + "/api/v1/posts/" + post._id, fetcher, {
        initialData: post,
    });
    const published = () => {
        if (post.createdAt === post.updatedAt)
            return post.createdAt
        if (post.createdAt !== post.updatedAt)
            return post.updatedAt
    }
    const date = new Date(published());
    const format = new Intl.DateTimeFormat(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

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
                <p className="text-gray-600 mt-3 leading-tight">
                    {post.author}
                </p>
                <div className="mt-8">
                </div>
                <a href="tg://resolve?domain=genemators">
                    <div className="mt-4 text-center border rounded bg-white text-black hover:text-white hover:bg-black">
                        Edit the post
                    </div>
                </a>
                <a href="tg://resolve?domain=genemators">
                    <div className="mt-4 text-center border rounded bg-white text-black hover:text-white hover:bg-red-700">
                        Edit the post
                    </div>
                </a>
            </div>
            <Footer />
        </>
    );
};

export async function getServerSideProps(context) {
    const post = await fetch(server + `/api/v1/posts/${context.params.post}`).then(
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


export default NewsPostPage;
