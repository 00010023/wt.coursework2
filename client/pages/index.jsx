import React from "react";
import Link from "next/link";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import Notification from "../components/Notification";

const Home = ({ documentation }) => {
  return (
    <>
      <Head>
        <title>Home | Gendy's</title>
        <meta property="og:title" content="Welcome to Serverland" />
        <meta
          property="og:description"
          content="This website is dedicated to fulfill WIUT's requirements"
        />
      </Head>
      <Header subtitle="Home" docsUrl={documentation} />
      <Notification news="This blog app is dedicated to fulfill WIUT's requirements" />
      <div className="h-auto">
        <div className="flex justify-center items-center dark:text-white">
          <svg viewBox="0 0 160 160" width="450" height="450">
            <circle cx="80" cy="80" r="50" fill="currentColor" />
            <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
              <path
                d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                fill="currentColor"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 0 0"
                  to="0 0 0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
            <g transform=" matrix(0.866, 0.5, 0.25, 0.433, 80, 80)">
              <path
                d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                fill="currentColor"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 0 0"
                  to="0 0 0"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </svg>
        </div>
        <div className="flex mb-4 justify-center">
          <div className="font-bold px-6 py-3 text-black dark:text-white text-center xl:text-6xl lg:text-5xl text-4xl border-4 rounded-lg">
            @Gendy
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-black dark:text-white text-center xl:text-3xl lg:text-2xl text-1xl">
            Welcome to Gendy's blog website!
          </div>
        </div>
        <div className="flex wrap mb-4 mt-4 justify-center mb-32">
          <Link href={"/posts"}>
            <div className="bg-black dark:bg-white text-white dark:text-black text-center xl:text-3xl lg:text-2xl text-1xl border rounded hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black cursor-pointer m-2 px-2 py-2">
              Browse Posties
            </div>
          </Link>
          <Link href={"/new"}>
            <div className="bg-black dark:bg-white text-white dark:text-black text-center xl:text-3xl lg:text-2xl text-1xl border rounded hover:text-black dark:hover:text-white hover:bg-white dark:hover:bg-black cursor-pointer m-2 px-2 py-2">
              Create Post
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const documentation = process.env.DOCUMENTATION;
  return {
    props: {
      documentation,
    },
  };
}

export default Home;
