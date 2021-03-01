import "../styles/globals.css";
import "../styles/ngprogress.css";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  window.scrollTo(0, 0);
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
