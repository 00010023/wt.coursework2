import Head from "next/head";
import React from "react";
import Router from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Notification from "../components/Notification";

export default function CustomError({ documentation, statusCode }) {
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
        <title>Oopsie, 50x! | Gendy's</title>
        <meta property="og:title" content="404 Whoopie!" />
        <meta
          property="og:description"
          content="This page's preview is not available as this page doesn't exist"
        />
      </Head>
      <Notification news="This blog app is dedicated to fulfill WIUT's requirements" />
      <div className="h-auto">
        <div className="flex mb-4 justify-center mt-48">
          <div className="text-black text-center text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-black hover:text-white">
            50x
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
