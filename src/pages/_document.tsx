import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Skeabrate, Sebastian Świeczkowski portoflio" />
      </Head>

      <body className="relative bg-slate-300 px-4 text-slate-800 after:fixed after:inset-0 after:-z-20 after:h-full after:w-full after:bg-gradient-to-t after:from-slate-300 after:to-white sm:px-10 lg:px-24">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
