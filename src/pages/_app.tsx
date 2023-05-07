import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import './globals.css';
import ActiveSectionProvider from 'context/ActiveSectionContext';
import ScrollProvider from 'context/ScrollContext';
import ActiveSectionBg from 'components/ActiveSectionBg';
import SkipToContent from 'components/SkipToContent';
import Curtain from 'components/Curtain';
import Footer from 'components/Footer';

const font = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <ActiveSectionProvider>
        <ScrollProvider>
          <SkipToContent />
          <Curtain />
          <Component {...pageProps} />
          <ActiveSectionBg />
          <Footer />
        </ScrollProvider>
      </ActiveSectionProvider>
    </div>
  );
}
