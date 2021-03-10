import Head from "next/head";
import React from "react";
import Router from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";

export default function Custom404({ documentation }) {
  const phrases = [
    "Hello Darkness, my old waifu...",
    "sudo rm -rf **/*",
    "why you bully me?",
    "KUKLI STYLE ACTIVATED!",
    "Ohayo... Sayonara...",
    "Stop it, get some drink!",
    "IT'S TIME TO STOP OKAY?!",
    "Surprise motherfathers!",
  ];
  const possibilities = Math.floor(Math.random() * phrases.length);
  const choice = phrases[possibilities];

  return (
    <>
      <Head>
        <title>Oopsie, 404! | Gendy's</title>
        <meta property="og:title" content="404 Whoopie!" />
        <meta
          property="og:description"
          content="This page's preview is not available as this page doesn't exist"
        />
      </Head>
      <Header subtitle="404" docsUrl={documentation} />
      <Notification news="This blog app is dedicated to fulfill WIUT's requirements" />
      <div className="h-auto">
        <div className="flex mb-4 justify-center mt-64">
          <div className="text-black text-center text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-black hover:text-white">
            404
          </div>
        </div>
        <div className="flex mb-4 justify-center">
          <div className="text-black text-center xl:text-3xl lg:text-2xl text-1xl">
            {choice}
          </div>
        </div>
        <div className="flex mb-4 justify-center mb-64">
          <a
            onClick={() => Router.back()}
            className="text-black text-center xl:text-3xl lg:text-2xl text-1xl hover:underline cursor-pointer"
          >
            {"<-"} Go back to git stage 🖤
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const documentation = process.env.DOCUMENTATION;
  return {
    props: {
      documentation,
    },
  };
}
