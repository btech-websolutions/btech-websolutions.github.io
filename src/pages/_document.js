import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/dm-sans" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />
      </Head>
      <body className="bg-light-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
