import { useContext, useEffect, useState } from 'react';
import { PT_Serif } from 'next/font/google';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { ActiveSectionContext } from 'context/ActiveSectionContext';
import { ScrollContext } from 'context/ScrollContext';
import { NAV_ITEMS, ROUTES } from 'utils/routes';
import { LogoSVG } from 'assets/SVGs';

const ptSerif = PT_Serif({ subsets: ['cyrillic'], weight: '700', display: 'swap' });

const ListNav = () => {
  const { scrollY } = useContext(ScrollContext);

  return (
    <ul className="hidden md:flex">
      {NAV_ITEMS.map((link, index) => (
        <motion.li
          initial={{
            opacity: 1,
            transform: 'translateY(0)',
          }}
          animate={{
            opacity: scrollY > 10 ? 0 : 1,
            transform: scrollY > 10 ? 'translateY(-10px)' : 'translateY(0)',
          }}
          transition={{
            duration: 0.25,
            delay: 0.1 * index,
          }}
          key={link}
          className="flex"
        >
          <a className="group w-full rounded px-3 py-2" href={'#' + link}>
            <span className="relative block w-full overflow-hidden pr-2 leading-4">
              <span className="relative block transition-transform duration-300 group-hover:-translate-y-[165%] group-hover:-rotate-12">
                {link}
              </span>
              <span
                className={cx(
                  ptSerif.className,
                  'absolute bottom-0 block translate-y-[120%] rotate-12 text-teal-500 transition-transform duration-300 group-hover:translate-y-0 group-hover:rotate-0'
                )}
              >
                {link}
              </span>
            </span>
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

const DropdownNav = ({ isNavOpen }: { isNavOpen: boolean }) => {
  const { activeSection } = useContext(ActiveSectionContext);

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
      className="absolute right-0 top-full z-40 mr-6 flex w-36 origin-top-right flex-col items-start gap-1 rounded bg-slate-100 py-2 shadow"
    >
      {NAV_ITEMS.map((link) => (
        <li key={link} className="flex w-full">
          <a
            className={cx(
              'relative w-full px-3 py-2',
              link === activeSection
                ? ptSerif.className +
                    ' text-slate-400/60 after:absolute after:right-3 after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-full after:bg-slate-400/60'
                : 'group'
            )}
            href={'#' + link}
          >
            <span className="relative block w-full overflow-hidden leading-4">
              <span className="relative block transition-transform duration-300 group-hover:-translate-y-[170%] group-hover:-rotate-12">
                {link}
              </span>
              <span
                className={cx(
                  ptSerif.className,
                  'absolute bottom-0 block translate-y-[120%] rotate-12 text-teal-500 transition-transform duration-300 group-hover:translate-y-0 group-hover:rotate-0'
                )}
              >
                {link}
              </span>
            </span>
          </a>
        </li>
      ))}
    </motion.ul>
  );
};

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { scrollY } = useContext(ScrollContext);

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if ((e.target as Element).id === 'hamburger') setIsNavOpen((state) => !state);
      else setIsNavOpen(false);
    });
  }, []);

  return (
    <motion.nav
      initial={{
        opacity: 0,
        transform: 'translateY(20px)',
      }}
      animate={{
        opacity: 1,
        transform: 'translateY(0)',
      }}
      transition={{
        duration: 0.3,
        delay: 2.7,
      }}
      className="fixed left-0 top-0 z-40 flex w-full items-center justify-between p-6"
    >
      <a href={'#' + ROUTES.skeabrate} className="flex h-10 items-center">
        <LogoSVG />
      </a>

      <button
        id="hamburger"
        aria-label="open menu"
        className={cx(
          'absolute right-6 z-10 flex h-10 w-10 flex-col justify-between rounded-full bg-slate-600 px-2 py-3 transition-transform duration-[400ms]',
          scrollY > 10 ? 'md:scale-1 md:delay-300' : 'md:scale-0'
        )}
      >
        <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-200"></span>
        <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-200"></span>
        <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-200"></span>
      </button>

      <ListNav />
      <DropdownNav isNavOpen={isNavOpen} />
    </motion.nav>
  );
};

export default Navigation;
