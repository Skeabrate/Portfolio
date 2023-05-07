import { useContext, useEffect, useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { ResumeQuery } from '../../graphql/generated';
import { LogoSVG } from 'assets/SVGs';
import { ActiveSectionContext } from 'context/ActiveSectionContext';
import { ScrollContext } from 'context/ScrollContext';
import { NAV_ITEMS } from 'utils/routes';
import TransitionLabel from './TransitionLabel';

const ListNav = () => {
  const { scrollY } = useContext(ScrollContext);

  return (
    <ul className="hidden justify-center gap-[1vw] md:flex">
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
          <a className="group rounded px-[1vw]" href={'#' + link}>
            <TransitionLabel label={link} />
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
      className="absolute right-4 top-full z-40 flex w-[clamp(9rem,10vw,10vw)] origin-top-right flex-col items-start gap-1 overflow-hidden rounded bg-slate-900/50 pt-2 shadow lg:right-[2vw]"
    >
      {NAV_ITEMS.map((link) => (
        <li key={link} className="flex w-full">
          <a
            className={cx(
              'relative w-full px-[clamp(1rem,1vw,1vw)] py-[clamp(0.6rem,0.8vw,0.8vw)]',
              link === activeSection
                ? 'text-slate-400/60 after:absolute after:right-3 after:top-1/2 after:h-1.5 after:w-1.5 after:-translate-y-1/2 after:rounded-full after:bg-slate-400/60'
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
          className="w-full bg-slate-950 px-[clamp(1rem,1vw,1vw)] py-[clamp(0.6rem,0.8vw,0.8vw)] font-bold text-slate-500"
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
        transform: 'translateY(-1vw)',
      }}
      animate={{
        opacity: 1,
        transform: 'translateY(0)',
      }}
      transition={{
        duration: 0.4,
        delay: 1,
      }}
      className="fixed left-0 top-0 z-40 grid w-full items-center px-4 py-6 text-nav md:grid-cols-3 lg:p-[2vw]"
    >
      <a
        href="/"
        className={cx('origin-left transition-transform duration-300', scrollY > 10 ? 'scale-75' : 'scale-100')}
      >
        <LogoSVG />
      </a>

      <button
        id="hamburger"
        aria-label="open menu"
        className={cx(
          'absolute right-4 z-10 flex h-[clamp(3rem,2.8vw,2.8vw)] w-[clamp(3rem,2.8vw,2.8vw)] flex-col justify-center gap-[clamp(0.3rem,0.25vw,0.25vw)] rounded-full bg-slate-600 px-[clamp(0.7rem,0.6vw,0.6vw)] transition-transform duration-300 lg:right-[2vw]',
          scrollY > 10 ? 'md:scale-1' : 'md:scale-0'
        )}
      >
        <span className="pointer-events-none h-[clamp(0.15rem,0.1vw,0.1vw)] w-full rounded-full bg-slate-300"></span>
        <span className="pointer-events-none h-[clamp(0.15rem,0.1vw,0.1vw)] w-full rounded-full bg-slate-300"></span>
        <span className="pointer-events-none h-[clamp(0.15rem,0.1vw,0.1vw)] w-full rounded-full bg-slate-300"></span>
      </button>

      <ListNav />
      <DropdownNav isNavOpen={isNavOpen} resumeSrc={resume?.resumeSrc.url} />

      <a
        href={resume?.resumeSrc.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cx(
          'ml-auto hidden h-[clamp(3rem,2.8vw,2.8vw)] items-center justify-center rounded-full border-[0.1vw] border-teal-400 text-teal-400 transition-all duration-300 md:flex',
          scrollY > 10 ? 'w-[clamp(3rem,2.8vw,2.8vw)] opacity-0' : 'w-[clamp(8rem,7.4vw,7.4vw)] opacity-100'
        )}
      >
        Resume
      </a>
    </motion.nav>
  );
};

export default Navigation;
