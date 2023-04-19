import './globals.css';
import { Fira_Code } from 'next/font/google';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import ScrollProvider from 'context/ScrollContext';

const font = Fira_Code({ subsets: ['cyrillic'], weight: '400' });

export const metadata = {
  title: 'Skeabrate - Sebastian Świeczkowski',
  description: 'Skeabrate, Sebastian Świeczkowski portoflio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-zinc-100 text-zinc-900 transition-colors duration-300 dark:bg-zinc-900 dark:text-zinc-50`}
      >
        <ScrollProvider>
          <Navigation />
          {children}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
