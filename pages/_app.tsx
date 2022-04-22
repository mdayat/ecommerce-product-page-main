import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/icons/favicon-32x32.png" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Muhammad Nur Hidayat" />
        <title>Frontend Mentor | E-commerce product page</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
