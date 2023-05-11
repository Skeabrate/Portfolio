import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import cx from 'classnames';
import ActiveSectionProvider from 'context/ActiveSectionContext';
import ScrollProvider from 'context/ScrollContext';
import WorkSectionContext from 'context/WorkSectionContext';
import ActiveSectionBg from 'components/ActiveSectionBg';
import Curtain from 'components/Curtain';
import Footer from 'components/Footer';
import SkipToContent from 'components/SkipToContent';
import './globals.css';

const font = Montserrat({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cx(font.className, 'px-4 text-default text-slate-300 md:px-[6vw] lg:px-[8vw]')}>
      <ActiveSectionProvider>
        <ScrollProvider>
          <WorkSectionContext>
            <SkipToContent />
            <Curtain />
            <Component {...pageProps} />
            <ActiveSectionBg />
            <Footer />
          </WorkSectionContext>
        </ScrollProvider>
      </ActiveSectionProvider>
    </div>
  );
}
