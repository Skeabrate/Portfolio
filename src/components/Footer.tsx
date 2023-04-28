import { motion } from 'framer-motion';
import { FacebookSVG, GithubSVG, GmailSVG, InstagramSVG } from 'assets/SVGs';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 px-4 pb-8 pt-16 text-center text-xs tracking-widest lg:p-0">
      <div className="static bottom-0 left-0 flex w-24 flex-col items-center gap-9 lg:fixed">
        <ul className="flex gap-4 lg:flex-col lg:gap-6">
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
        </ul>

        <p className="hidden h-20 w-px bg-slate-500 lg:block"></p>
      </div>

      <motion.p
        initial={{
          opacity: 0,
          transform: 'translateY(20px)',
        }}
        animate={{
          opacity: 1,
          transform: 'translateY(0)',
        }}
        transition={{
          duration: 0.2,
          delay: 0.6,
        }}
        className="bottom-1 lg:fixed"
      >
        &copy;/ {new Date().getFullYear()}
        <span className="absolute -left-full top-1/2 hidden h-px w-10 translate-y-1/2 bg-slate-500 lg:block"></span>
        <span className="absolute -right-full top-1/2 hidden h-px w-10 translate-y-1/2 bg-slate-500 lg:block"></span>
      </motion.p>

      <div className="vertical-rl bottom-0 right-0 flex items-center gap-9 text-slate-700 lg:fixed lg:h-screen lg:w-24 lg:pt-8">
        <a
          className="mt-auto hidden transition-all hover:text-teal-500 lg:block"
          href="mailto:sebastianswiecz458@gmail.com"
        >
          sebastianswiecz458@gmail.com
        </a>

        <p className="hidden h-20 w-px bg-slate-500 lg:block"></p>
      </div>
    </footer>
  );
};

export default Footer;
