import { useContext, useEffect, useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { ResumeQuery } from '../../graphql/generated';
import { LogoSVG } from 'assets/SVGs';
import { ActiveSectionContext } from 'context/ActiveSectionContext';
import { ScrollContext } from 'context/ScrollContext';
import { NAV_ITEMS } from 'utils/routes';
import { ptSerif } from 'utils/serifFont';
import TransitionLabel from './TransitionLabel';

const ListNav = () => {
  const { scrollY } = useContext(ScrollContext);

  return (
    <ul className="hidden justify-center md:flex">
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
            delay: 0.1 + 0.1 * index,
          }}
          key={link}
          className="flex"
        >
          <a className="group rounded px-3 py-2 text-lg" href={'#' + link}>
            <TransitionLabel label={link} padding />
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

const DropdownNav = ({ isNavOpen, resumeSrc }: { isNavOpen: boolean; resumeSrc: string | undefined }) => {
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
      className="absolute right-8 top-full z-40 flex w-36 origin-top-right flex-col items-start gap-1 rounded bg-slate-100 pt-2 shadow"
    >
      {NAV_ITEMS.map((link) => (
        <li key={link} className="flex w-full">
          <a
            className={cx(
              'relative w-full px-3 py-2',
              link === activeSection
                ? ptSerif +
                    ' text-slate-400/60 after:absolute after:right-3 after:top-1/2 after:h-1.5 after:w-1.5 after:-translate-y-1/2 after:rounded-full after:bg-slate-400/60'
                : 'group'
            )}
            href={'#' + link}
          >
            <TransitionLabel label={link} />
          </a>
        </li>
      ))}

      <li className="flex w-full">
        <a
          href={resumeSrc}
          target="_blank"
          rel="noopener noreferrer"
          className={cx(ptSerif, 'flex w-full justify-center bg-slate-200 px-3 py-2 font-bold text-slate-400')}
        >
          Resume
        </a>
      </li>
    </motion.ul>
  );
};

const Navigation = ({ resume }: { resume: ResumeQuery['resume'] }) => {
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
        transform: 'translateY(-10px)',
      }}
      animate={{
        opacity: 1,
        transform: 'translateY(0)',
      }}
      transition={{
        duration: 0.4,
        delay: 1,
      }}
      className="fixed left-0 top-0 z-40 grid w-full items-center p-6 px-8 md:grid-cols-3"
    >
      <a
        href="/"
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
          'absolute right-8 z-10 flex h-10 w-10 flex-col justify-between rounded-full bg-slate-600 px-2 py-3 transition-transform duration-300',
          scrollY > 10 ? 'md:scale-1' : 'md:scale-0'
        )}
      >
        <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-200"></span>
        <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-200"></span>
        <span className="pointer-events-none h-0.5 w-full rounded-full bg-slate-200"></span>
      </button>

      <ListNav />
      <DropdownNav isNavOpen={isNavOpen} resumeSrc={resume?.resumeSrc.url} />

      <a
        href={resume?.resumeSrc.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cx(
          ptSerif,
          'ml-auto hidden h-10 items-center justify-center rounded-full border border-teal-500 font-bold text-teal-500 transition-all duration-300 md:flex',
          scrollY > 10 ? 'w-10' : 'w-32'
        )}
      >
        <span className={cx('transition-opacity duration-200', scrollY > 10 ? 'opacity-0' : 'opacity-100')}>
          Resume
        </span>
      </a>
    </motion.nav>
  );
};

export default Navigation;
