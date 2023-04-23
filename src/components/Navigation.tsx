import { useContext, useEffect, useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { LogoSVG } from 'assets/SVGs';
import { ROUTES } from 'utils/routes';
import { whileTap } from 'utils/transitions';
import { ScrollContext } from 'context/ScrollContext';
import { ActiveSectionContext } from 'context/ActiveSectionContext';
import ThemeButton from './ThemeButton';

const navItems = Object.entries(ROUTES).map(([, value]) => value);

const MobileNav = ({ isNavOpen }: { isNavOpen: boolean }) => {
  const showNav = {
    opacity: 1,
    scale: 1,
    display: 'flex',
  };

  const hideNav = {
    opacity: 0,
    scale: 0.7,
    transitionEnd: {
      display: 'none',
    },
  };

  return (
    <motion.ul
      initial={{
        opacity: 0,
        display: 'none',
      }}
      transition={{ duration: 0.1 }}
      animate={isNavOpen ? showNav : hideNav}
      className="absolute right-0 top-full z-50 m-4 flex w-36 origin-top-right flex-col items-start gap-1 rounded bg-slate-100 p-1 shadow dark:bg-slate-800"
    >
      {navItems.map((link) => (
        <li className="flex w-full" key={link}>
          <a
            className="w-full rounded px-4 py-2 hover:bg-slate-200 focus:bg-slate-200 focus:outline focus:outline-4 focus:outline-slate-300 hover:dark:bg-slate-900/40 focus:dark:bg-slate-900/40 focus:dark:outline-slate-900"
            href={'#' + link}
          >
            {link}
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

const DesktopNav = () => {
  const { activeSection } = useContext(ActiveSectionContext);

  return (
    <ul className="hidden items-center gap-6 md:flex">
      {navItems.map((link, index) => (
        <motion.li
          initial={{
            opacity: 0,
            transform: 'translateY(-10px)',
          }}
          animate={{
            opacity: 1,
            transform: 'translateY(0)',
          }}
          transition={{ duration: 0.3, delay: 0.1 * index + 0.7 }}
          key={link}
        >
          <a
            className={cx(
              'bg-gradient-to-r from-black to-black bg-no-repeat p-[1px] transition-[background-size] duration-300 dark:from-slate-300 dark:to-slate-300',
              link === activeSection ? 'bg-[length:100%_1px] bg-left-bottom' : 'bg-[length:0px_1px] bg-right-bottom'
            )}
            href={'#' + link}
          >
            {link}
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

const Navigation = () => {
  const { scrollY } = useContext(ScrollContext);

  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if ((e.target as Element).id === 'hamburger') setIsNavOpen((state) => !state);
      else setIsNavOpen(false);
    });
  }, []);

  return (
    <nav
      className={cx(
        'nav-transition fixed left-0 top-0 z-40 flex w-full items-center justify-between gap-6 px-4 backdrop-blur-sm sm:px-10 lg:px-12',
        scrollY > 30 ? 'h-16 shadow-md' : 'h-24 bg-transparent'
      )}
    >
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="#"
        className="w-44"
      >
        <LogoSVG />
      </motion.a>

      <DesktopNav />

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex h-10 w-44 items-center justify-end gap-3 lg:gap-6"
      >
        <li className="h-full">
          <motion.button
            whileTap={whileTap}
            className="aspect-square h-full rounded focus:bg-slate-200 focus:outline focus:outline-4 focus:outline-slate-300 dark:from-white dark:to-white hover:dark:bg-slate-900/40 focus:dark:bg-slate-900/40 focus:dark:outline-slate-900"
          >
            US
          </motion.button>
        </li>
        <li className="h-full">
          <ThemeButton />
        </li>
        <li className="h-full md:hidden">
          <motion.button
            whileTap={whileTap}
            id="hamburger"
            aria-label="open menu"
            className="relative z-10 flex aspect-square h-full flex-col justify-between rounded px-2 py-3 focus:bg-slate-200 focus:outline focus:outline-4 focus:outline-slate-300 dark:from-white dark:to-white hover:dark:bg-slate-900/40 focus:dark:bg-slate-900/40 focus:dark:outline-slate-900"
          >
            <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-900 dark:bg-slate-300"></span>
            <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-900 dark:bg-slate-300"></span>
            <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-900 dark:bg-slate-300"></span>
          </motion.button>
        </li>
      </motion.ul>

      <MobileNav isNavOpen={isNavOpen} />
    </nav>
  );
};

export default Navigation;
