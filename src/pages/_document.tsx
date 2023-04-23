import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <title>Skeabrate</title>
        <meta name="description" content="Skeabrate, Sebastian Świeczkowski portoflio" />
      </Head>

      <body className="relative bg-slate-300 px-4 text-slate-700 after:fixed after:inset-0 after:-z-20 after:h-full after:w-full after:bg-gradient-to-t after:from-slate-300 after:to-slate-50 dark:bg-slate-950 dark:text-slate-200/90 dark:after:from-slate-950 dark:after:to-slate-800 sm:px-10 lg:px-24">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
