import './globals.css';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';

export const metadata = {
  title: 'Skeabrate - Sebastian Świeczkowski',
  description: 'Skeabrate, Sebastian Świeczkowski portoflio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-100 text-zinc-900 transition-colors duration-300 dark:bg-zinc-900 dark:text-zinc-50">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
