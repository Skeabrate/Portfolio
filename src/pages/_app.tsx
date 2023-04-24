import type { AppProps } from 'next/app';
import './globals.css';
import { Fira_Code } from 'next/font/google';
import cx from 'classnames';
import ScrollProvider from 'context/ScrollContext';
import ActiveSectionBg from 'components/ActiveLinkBg';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

const firaCode = Fira_Code({ subsets: ['cyrillic'], weight: '400', display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollProvider>
      <Navigation />
      <main className={cx('mx-auto max-w-6xl', firaCode.className)}>
        <Component {...pageProps} />
        <ActiveSectionBg />
      </main>
      <Footer />
    </ScrollProvider>
  );
}
