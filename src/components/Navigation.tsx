import { useContext, useEffect, useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { LogoSVG } from 'assets/SVGs';
import { NAV_ITEMS } from 'utils/routes';
import { defaultEffect, differenceEffect, scaleDownEffect } from 'hooks/useMouseEffect';
import { ActiveSectionContext } from 'context/ActiveSectionContext';
import { MouseAnimationContext } from 'context/MouseAnimationContext';
import { ScrollContext } from 'context/ScrollContext';
import { WorkSectionEffectContext } from 'context/WorkSectionEffectContext';
import { ResumeQuery } from '../../graphql/generated';
import ResumeButton from './ResumeButton';
import TransitionLabel from './TransitionLabel';

const ListNav = () => {
  const { scrollY } = useContext(ScrollContext);
  const { setMouseEffect } = useContext(MouseAnimationContext);

  return (
    <ul className="hidden justify-center gap-[1vw] md:flex">
      {NAV_ITEMS.map(({ label }, index) => (
        <motion.li
          onMouseEnter={() => setMouseEffect(scaleDownEffect())}
          onMouseLeave={() => setMouseEffect(defaultEffect())}
          initial={{
            opacity: 1,
            transform: 'translateY(0)',
          }}
          animate={{
            opacity: scrollY > 10 ? 0 : 1,
            transform: scrollY > 10 ? 'translateY(-1vw)' : 'translateY(0)',
          }}
          transition={{
            duration: 0.25,
            delay: 0.1 + 0.1 * index,
          }}
          key={label}
          className="flex"
        >
          <a className="group rounded px-[1vw]" href={'#' + label}>
            <TransitionLabel label={label} />
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

const DropdownNav = ({ isNavOpen, resumeSrc }: { isNavOpen: boolean; resumeSrc: string | undefined }) => {
  const { activeSection } = useContext(ActiveSectionContext);
  const { setMouseEffect } = useContext(MouseAnimationContext);

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
      {NAV_ITEMS.map(({ label }) => (
        <li
          onMouseEnter={() => setMouseEffect(scaleDownEffect())}
          onMouseLeave={() => setMouseEffect(defaultEffect())}
          key={label}
          className="flex w-full"
        >
          <a
            className={cx(
              'relative w-full px-[clamp(1rem,1vw,1vw)] py-[clamp(0.6rem,0.8vw,0.8vw)]',
              label === activeSection.label
                ? 'text-slate-400/60 after:absolute after:right-3 after:top-1/2 after:h-1.5 after:w-1.5 after:-translate-y-1/2 after:rounded-full after:bg-slate-400/60'
                : 'group'
            )}
            href={'#' + label}
          >
            <TransitionLabel label={label} />
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
  const { isWorkSectionEffectActive } = useContext(WorkSectionEffectContext);
  const { setMouseEffect } = useContext(MouseAnimationContext);

  const differenceMouseAnimationEnter = () => {
    setMouseEffect(differenceEffect());
  };
  const differenceMouseAnimationLeave = () => {
    setMouseEffect(defaultEffect());
  };

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
        transform: 'translateY(-0.5vw)',
      }}
      animate={{
        opacity: 1,
        transform: 'translateY(0)',
      }}
      transition={{
        duration: 0.5,
        delay: 1,
      }}
      className="fixed left-0 top-0 z-30 grid w-full items-center px-4 py-6 md:grid-cols-3 lg:p-[2vw]"
    >
      <a
        href="/"
        className={cx('w-fit origin-left transition-transform duration-300', scrollY > 10 ? 'scale-75' : 'scale-100')}
        onMouseEnter={differenceMouseAnimationEnter}
        onMouseLeave={differenceMouseAnimationLeave}
      >
        <LogoSVG />
      </a>

      <button
        id="hamburger"
        aria-label="open menu"
        onMouseEnter={differenceMouseAnimationEnter}
        onMouseLeave={differenceMouseAnimationLeave}
        className={cx(
          isWorkSectionEffectActive ? 'bg-teal-500' : 'bg-slate-600',
          scrollY > 10 ? 'md:scale-1' : 'md:scale-0',
          'transition-hamburger absolute right-4 z-10 flex h-[clamp(3rem,2.8vw,2.8vw)] w-[clamp(3rem,2.8vw,2.8vw)] flex-col justify-center gap-[clamp(0.3rem,0.25vw,0.25vw)] rounded-full px-[clamp(0.7rem,0.6vw,0.6vw)] lg:right-[2vw]'
        )}
      >
        <span
          className={cx(
            isWorkSectionEffectActive ? 'bg-black' : 'bg-slate-300',
            'transition-color pointer-events-none h-[clamp(0.2rem,0.1vw,0.1vw)] w-full rounded-full duration-700'
          )}
        ></span>
        <span
          className={cx(
            isWorkSectionEffectActive ? 'bg-black' : 'bg-slate-300',
            'transition-color pointer-events-none h-[clamp(0.2rem,0.1vw,0.1vw)] w-full rounded-full duration-700'
          )}
        ></span>
        <span
          className={cx(
            isWorkSectionEffectActive ? 'bg-black' : 'bg-slate-300',
            'transition-color pointer-events-none h-[clamp(0.2rem,0.1vw,0.1vw)] w-full rounded-full duration-700'
          )}
        ></span>
      </button>

      <ListNav />
      <DropdownNav isNavOpen={isNavOpen} resumeSrc={resume?.resumeSrc.url} />

      <div className="ml-auto hidden md:block">
        <ResumeButton isNav resumeSrc={resume?.resumeSrc.url} scrollY={scrollY} />
      </div>
    </motion.nav>
  );
};

export default Navigation;
