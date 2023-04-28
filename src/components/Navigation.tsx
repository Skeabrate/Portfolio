import { useContext, useEffect, useState } from 'react';
import { PT_Serif } from 'next/font/google';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { LogoSVG } from 'assets/SVGs';
import { NAV_ITEMS, ROUTES } from 'utils/routes';
import { ActiveSectionContext } from 'context/ActiveSectionContext';

const ptSerif = PT_Serif({ subsets: ['cyrillic'], weight: '700', display: 'swap' });

const DesktopNav = () => {
  const { activeSection } = useContext(ActiveSectionContext);

  return (
    <ul className="hidden gap-1 md:flex">
      {NAV_ITEMS.map((link) => (
        <li key={link} className="flex">
          <a
            className={cx(
              'flex items-center justify-center rounded-full py-2',
              link === activeSection
                ? ptSerif.className +
                    ' relative text-slate-400/60 after:absolute after:bottom-0 after:left-1/2 after:h-[6px] after:w-[6px] after:-translate-x-1/2 after:rounded-full after:bg-slate-400/60'
                : 'group'
            )}
            href={'#' + link}
          >
            <div className="relative flex h-5 w-20 items-center justify-center overflow-hidden">
              <span className="absolute transition-transform duration-300 group-hover:-translate-y-full group-hover:-rotate-12">
                {link}
              </span>
              <span
                className={cx(
                  ptSerif.className,
                  'absolute translate-y-full rotate-12 px-3 text-teal-500 transition-transform duration-300 group-hover:translate-y-0 group-hover:rotate-0'
                )}
              >
                {link}
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

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
      className="absolute right-0 top-full z-40 m-4 flex w-36 origin-top-right flex-col items-start gap-1 rounded bg-slate-100 p-1 shadow"
    >
      {NAV_ITEMS.map((link) => (
        <li className="flex w-full" key={link}>
          <a
            className="w-full rounded px-4 py-2 hover:bg-slate-200 focus:bg-slate-200 focus:outline focus:outline-4 focus:outline-slate-300"
            href={'#' + link}
          >
            {link}
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if ((e.target as Element).id === 'hamburger') setIsNavOpen((state) => !state);
      else setIsNavOpen(false);
    });
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-40 flex w-full items-center justify-between p-6">
      <a href={'#' + ROUTES.skeabrate}>
        <LogoSVG />
      </a>

      <motion.button
        id="hamburger"
        whileHover={{
          borderRadius: '100%',
        }}
        whileTap={{
          scale: 0.9,
        }}
        whileFocus={{
          borderRadius: '100%',
          scale: 0.9,
        }}
        transition={{ duration: 0.4 }}
        aria-label="open menu"
        className="relative z-10 flex h-10 w-10 flex-col justify-between rounded bg-slate-700 px-2 py-3 md:hidden"
      >
        <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-200"></span>
        <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-200"></span>
        <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-200"></span>
      </motion.button>

      <DesktopNav />
      <MobileNav isNavOpen={isNavOpen} />
    </nav>
  );
};

export default Navigation;
