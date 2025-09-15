// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Portfolio of Rafli Triatma: product design, UI/UX, and design systems." />
        <meta property="og:title" content="Rafli Triatma — UI/UX Designer" />
        <meta property="og:description" content="Product design portfolio" />
        <meta property="og:image" content="/og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
