import { useContext, useEffect, useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { LogoSVG } from 'assets/SVGs';
import { NAV_ITEMS } from 'utils/routes';
import { defaultEffect, differenceEffect, loopedTextEffect, scaleDownEffect } from 'hooks/useMouseEffect';
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
    <ul className="hidden justify-center gap-[clamp(1vw,1vw,1rem)] md:flex">
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
          <a href={'#' + label} className="group rounded px-[clamp(1vw,1vw,1rem)]">
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
      className="absolute right-4 top-full z-40 flex w-[clamp(9rem,10vw,34rem)] origin-top-right flex-col items-start gap-1 overflow-hidden rounded bg-slate-900/50 pt-2 shadow lg:right-[2vw]"
    >
      {NAV_ITEMS.map(({ label }) => (
        <li
          onMouseEnter={() => setMouseEffect(scaleDownEffect())}
          onMouseLeave={() => setMouseEffect(defaultEffect())}
          key={label}
          className="flex w-full"
        >
          <a
            href={'#' + label}
            className={cx(
              'relative w-full px-[clamp(1rem,1vw,3.4rem)] py-[clamp(0.6rem,0.8vw,2.6rem)]',
              label === activeSection.label
                ? 'text-slate-400/60 after:absolute after:right-[clamp(1rem,1vw,3.4rem)] after:top-1/2 after:h-[0.3vw] after:w-[0.3vw] after:-translate-y-1/2 after:rounded-full after:bg-slate-400/60'
                : 'group'
            )}
          >
            <TransitionLabel label={label} />
          </a>
        </li>
      ))}

      <li
        className="flex w-full"
        onMouseEnter={() => setMouseEffect(loopedTextEffect({ text: 'resume' }))}
        onMouseLeave={() => setMouseEffect(defaultEffect())}
      >
        <a
          href={resumeSrc}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-slate-950 px-[clamp(1rem,1vw,3.4rem)] py-[clamp(0.6rem,0.8vw,2.6rem)] font-bold text-slate-500"
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
        aria-label="home"
        className={cx(
          'ml-[clamp(-0.8rem,-1vw,-1vw)] flex w-fit origin-left items-center justify-center transition-transform duration-300',
          scrollY > 10 ? 'md:scale-75' : 'scale-100'
        )}
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
          'transition-hamburger absolute right-4 z-10 flex h-[clamp(3rem,2.8vw,8rem)] w-[clamp(3rem,2.8vw,8rem)] flex-col justify-center gap-[clamp(0.3rem,0.25vw,0.7rem)] rounded-full px-[clamp(0.7rem,0.6vw,2rem)] lg:right-[2vw]'
        )}
      >
        <span
          className={cx(
            isWorkSectionEffectActive ? 'bg-black' : 'bg-slate-300',
            'transition-color pointer-events-none h-[clamp(0.2rem,0.1vw,0.4rem)] w-full rounded-full duration-1000'
          )}
        ></span>
        <span
          className={cx(
            isWorkSectionEffectActive ? 'bg-black' : 'bg-slate-300',
            'transition-color pointer-events-none h-[clamp(0.2rem,0.1vw,0.4rem)] w-full rounded-full duration-1000'
          )}
        ></span>
        <span
          className={cx(
            isWorkSectionEffectActive ? 'bg-black' : 'bg-slate-300',
            'transition-color pointer-events-none h-[clamp(0.2rem,0.1vw,0.4rem)] w-full rounded-full duration-1000'
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
