import Link from 'next/link';
import { FacebookSVG, GithubSVG, GmailSVG, InstagramSVG, LogoSVG } from 'assets/SVGs';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 px-4 pb-8 pt-16 text-center">
      <Link href="#">
        <LogoSVG />
      </Link>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="mailto:sebastianswiecz458@gmail.com"
        className="vertical-rl fixed bottom-0 right-0 hidden h-[340px] w-24 items-center text-xs tracking-widest after:absolute after:bottom-0 after:left-1/2 after:hidden after:h-20 after:w-[1px] after:-translate-x-1/2 after:bg-slate-800 dark:after:bg-slate-200 lg:flex lg:after:block"
      >
        sebastianswiecz458@gmail.com
      </motion.a>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex gap-4 after:absolute after:bottom-0 after:left-1/2 after:hidden after:h-20 after:w-[1px] after:-translate-x-1/2 after:bg-slate-800 dark:after:bg-slate-200 lg:fixed lg:bottom-0 lg:left-0 lg:h-[340px] lg:w-24 lg:flex-col lg:items-center lg:gap-7 lg:pt-14 lg:after:block"
      >
        <li>
          <a aria-label="github" href="https://github.com/Skeabrate" target="_blank" rel="noopener noreferrer">
            <GithubSVG />
          </a>
        </li>
        <li>
          <a aria-label="gmail" href="mailto:sebastianswiecz458@gmail.com" target="_blank" rel="noopener noreferrer">
            <GmailSVG />
          </a>
        </li>
        <li>
          <a
            aria-label="instagram"
            href="https://www.instagram.com/sebaswieca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramSVG />
          </a>
        </li>
        <li>
          <a
            aria-label="facebook"
            href="https://www.facebook.com/sebastian.swieczkowski.9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookSVG />
          </a>
        </li>
      </motion.ul>

      <p className="text-sm tracking-wider">
        &copy; {new Date().getFullYear()} Sebastian Świeczkowski <br /> All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
