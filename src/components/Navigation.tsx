'use client';

import { useContext, useEffect, useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { ROUTES } from 'utils/routes';
import { ScrollContext } from 'context/ScrollContext';
import { ActiveSectionContext } from 'context/ActiveSectionContext';
import ThemeButton from './ThemeButton';
import { whileTap } from 'utils/transitions';

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
      className="absolute right-0 top-full m-4 flex w-36 origin-top-right flex-col items-start gap-1 rounded bg-slate-100 p-1 shadow dark:bg-slate-800"
    >
      <li className="flex w-full">
        <a
          className="w-full rounded from-black to-black bg-no-repeat px-4 py-2 transition-[background-size] duration-300 hover:bg-slate-200 focus:bg-slate-200 focus:outline focus:outline-4 focus:outline-slate-300 dark:from-white dark:to-white hover:dark:bg-slate-900/40 focus:dark:bg-slate-900/40 focus:dark:outline-slate-900"
          href={'#' + ROUTES.about}
        >
          {ROUTES.about}
        </a>
      </li>
      <li className="flex w-full">
        <a
          className="w-full rounded from-black to-black bg-no-repeat px-4 py-2 transition-[background-size] duration-300 hover:bg-slate-200 focus:bg-slate-200 focus:outline focus:outline-4 focus:outline-slate-300 dark:from-white dark:to-white hover:dark:bg-slate-900/40 focus:dark:bg-slate-900/40 focus:dark:outline-slate-900"
          href={'#' + ROUTES.skills}
        >
          {ROUTES.skills}
        </a>
      </li>
      <li className="flex w-full">
        <a
          className="w-full rounded from-black to-black bg-no-repeat px-4 py-2 transition-[background-size] duration-300 hover:bg-slate-200 focus:bg-slate-200 focus:outline focus:outline-4 focus:outline-slate-300 dark:from-white dark:to-white hover:dark:bg-slate-900/40 focus:dark:bg-slate-900/40 focus:dark:outline-slate-900"
          href={'#' + ROUTES.projects}
        >
          {ROUTES.projects}
        </a>
      </li>
      <li className="flex w-full">
        <a
          className="w-full rounded from-black to-black bg-no-repeat px-4 py-2 transition-[background-size] duration-300 hover:bg-slate-200 focus:bg-slate-200 focus:outline focus:outline-4 focus:outline-slate-300 dark:from-white dark:to-white hover:dark:bg-slate-900/40 focus:dark:bg-slate-900/40 focus:dark:outline-slate-900"
          href={'#' + ROUTES.contact}
        >
          {ROUTES.contact}
        </a>
      </li>
    </motion.ul>
  );
};

const DesktopNav = () => {
  const { activeSection } = useContext(ActiveSectionContext);

  return (
    <ul className="hidden items-center gap-6 md:flex">
      <li>
        <a
          className={cx(
            'bg-gradient-to-r from-black to-black bg-no-repeat p-[1px] transition-[background-size] duration-300 dark:from-white dark:to-white',
            ROUTES.about === activeSection
              ? 'bg-[length:100%_1px] bg-left-bottom'
              : 'bg-[length:0px_1px] bg-right-bottom'
          )}
          href={'#' + ROUTES.about}
        >
          {ROUTES.about}
        </a>
      </li>
      <li>
        <a
          className={cx(
            'bg-gradient-to-r from-black to-black bg-no-repeat p-[1px] transition-[background-size] duration-300 dark:from-white dark:to-white',
            ROUTES.skills === activeSection
              ? 'bg-[length:100%_1px] bg-left-bottom'
              : 'bg-[length:0px_1px] bg-right-bottom'
          )}
          href={'#' + ROUTES.skills}
        >
          {ROUTES.skills}
        </a>
      </li>
      <li>
        <a
          className={cx(
            'bg-gradient-to-r from-black to-black bg-no-repeat p-[1px] transition-[background-size] duration-300 dark:from-white dark:to-white',
            ROUTES.projects === activeSection
              ? 'bg-[length:100%_1px] bg-left-bottom'
              : 'bg-[length:0px_1px] bg-right-bottom'
          )}
          href={'#' + ROUTES.projects}
        >
          {ROUTES.projects}
        </a>
      </li>
      <li>
        <a
          className={cx(
            'bg-gradient-to-r from-black to-black bg-no-repeat p-[1px] transition-[background-size] duration-300 dark:from-white dark:to-white',
            ROUTES.contact === activeSection
              ? 'bg-[length:100%_1px] bg-left-bottom'
              : 'bg-[length:0px_1px] bg-right-bottom'
          )}
          href={'#' + ROUTES.contact}
        >
          {ROUTES.contact}
        </a>
      </li>
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
        'nav-transition fixed left-0 top-0 flex w-full items-center justify-between gap-6 px-4 backdrop-blur-sm lg:px-12',
        scrollY > 30 ? 'h-16 shadow-md' : 'h-24 bg-transparent'
      )}
    >
      <a href="#">Skeabrate</a>

      <DesktopNav />

      <ul className="flex h-10 items-center gap-3 lg:gap-6">
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
            <span className="pointer-events-none h-[2px] w-full rounded-full bg-slate-900 dark:bg-slate-300"></span>
            <span className="pointer-events-none h-[2px] w-full rounded-full bg-slate-900 dark:bg-slate-300"></span>
            <span className="pointer-events-none h-[2px] w-full rounded-full bg-slate-900 dark:bg-slate-300"></span>
          </motion.button>
        </li>
      </ul>

      <MobileNav isNavOpen={isNavOpen} />
    </nav>
  );
};

export default Navigation;
