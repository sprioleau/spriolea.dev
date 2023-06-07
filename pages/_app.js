import "../styles/styles.scss";
import "react-toastify/dist/ReactToastify.css";

import { LazyMotion, domAnimation } from "framer-motion";

// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation}>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
      <Analytics />
    </LazyMotion>
  );
}

export default MyApp;
