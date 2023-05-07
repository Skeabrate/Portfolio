import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Skeabrate, Sebastian Świeczkowski portoflio" />
      </Head>

      <body className="relative bg-slate-950 px-4 text-default text-slate-300 after:fixed after:inset-0 after:-z-20 after:h-full after:w-full after:bg-gradient-to-b after:from-slate-800 after:to-slate-950 md:px-[6vw] lg:px-[10vw]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
