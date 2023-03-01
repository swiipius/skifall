import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="rgb(36,36,36)" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
