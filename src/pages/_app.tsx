import "@/styles/globals.css";
import "@/components/imageSlider/StyleImageSlider.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
