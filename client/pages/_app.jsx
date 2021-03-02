import App from "next/app";
import React from "react";
import "../styles/globals.css";
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

export default class GenoWebsiteApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <meta
            property="og:image"
            content="https://genemator.me/preview.png"
          />
          <meta property="og:site_name" content="Serverland" />
          <title>Serverland's Portfolio Website</title>
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}
