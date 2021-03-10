import App from "next/app";
import React from "react";
import "../styles/globals.css";
import "../styles/markdown.css";
import "../styles/ngprogress.css";
import Router from "next/router";
import NProgress from "nprogress";
import Head from "next/head";

NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  window.scrollTo(0, 0);
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div className="h-screen">
        <Head>
          <meta
            property="og:image"
            content="https://genemator.me/preview.png"
          />
          <meta property="og:site_name" content="Serverland" />
          <title>Gendy's Portfolio Website</title>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
