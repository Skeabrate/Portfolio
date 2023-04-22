import type { AppProps } from 'next/app';
import './globals.css';
import ActiveSectionBg from 'components/ActiveSectionBg';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import ActiveSectionProvider from 'context/ActiveSectionContext';
import ScrollProvider from 'context/ScrollContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActiveSectionProvider>
      <ScrollProvider>
        <Navigation />
        <Component {...pageProps} />
        <ActiveSectionBg />
        <Footer />
      </ScrollProvider>
    </ActiveSectionProvider>
  );
}
