import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { ActiveSectionContext } from 'context/ActiveSectionContext';
import { ScrollContext } from 'context/ScrollContext';
import { NAV_ITEMS, ROUTES } from 'utils/routes';
import { ptSerif } from 'utils/serifFont';
import { LogoSVG } from 'assets/SVGs';
import TransitionLabel from './TransitionLabel';

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
          <a className="group rounded px-3 py-2" href={'#' + link}>
            <TransitionLabel label={link} padding />
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
                ? ptSerif +
                    ' text-slate-400/60 after:absolute after:right-3 after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-full after:bg-slate-400/60'
                : 'group'
            )}
            href={'#' + link}
          >
            <TransitionLabel label={link} />
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
        transform: 'translateY(-40px)',
      }}
      animate={{
        opacity: 1,
        transform: 'translateY(0)',
      }}
      transition={{
        duration: 0.4,
        delay: 0.9,
      }}
      className="fixed left-0 top-0 z-40 flex w-full items-center justify-between p-6"
    >
      <a
        href={'#' + ROUTES.skeabrate}
        className={cx(
          'flex h-10 origin-left items-center transition-transform duration-300',
          scrollY > 10 ? 'scale-75' : 'scale-100'
        )}
      >
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
