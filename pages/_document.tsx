import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="bg-neutral-white min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
