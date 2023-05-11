import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Skeabrate, Sebastian Świeczkowski portoflio" />
      </Head>

      <body className="bg-slate-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
