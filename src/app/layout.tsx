import './globals.css';
import cx from 'classnames';
import { Fira_Code } from 'next/font/google';
import ScrollProvider from 'context/ScrollContext';
import ActiveSectionProvider from 'context/ActiveSectionContext';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import ActiveSectionLink from 'components/ActiveSectionLink';

const firaCode = Fira_Code({ subsets: ['cyrillic'], weight: '400' });

export const metadata = {
  title: 'Skeabrate - Sebastian Świeczkowski',
  description: 'Skeabrate, Sebastian Świeczkowski portoflio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cx(
          firaCode.className,
          'relative text-black transition-colors duration-300 after:fixed after:inset-0 after:-z-20 after:h-full after:w-full after:bg-gradient-to-t after:from-slate-300 after:to-slate-50 dark:text-white dark:after:from-slate-950 dark:after:to-slate-800'
        )}
      >
        <ActiveSectionProvider>
          <ScrollProvider>
            <Navigation />
            {children}
            <ActiveSectionLink />
            <Footer />
          </ScrollProvider>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
