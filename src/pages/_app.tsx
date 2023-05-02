import type { AppProps } from 'next/app';
import './globals.css';
import ActiveSectionProvider from 'context/ActiveSectionContext';
import ScrollProvider from 'context/ScrollContext';
import Navigation from 'components/Navigation';
import ActiveSectionBg from 'components/ActiveSectionBg';
import Footer from 'components/Footer';
import Curtain from 'components/Curtain';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActiveSectionProvider>
      <ScrollProvider>
        <Curtain />
        <Navigation />
        <Component {...pageProps} />
        <ActiveSectionBg />
        <Footer />
      </ScrollProvider>
    </ActiveSectionProvider>
  );
}
