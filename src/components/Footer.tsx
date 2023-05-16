import { useContext } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { FacebookSVG, GithubSVG, GmailSVG, InstagramSVG } from 'assets/SVGs';
import { contactEffect, defaultEffect, footerEffect, scaleDownEffect } from 'hooks/useMouseEffect';
import { MouseAnimationContext } from 'context/MouseAnimationContext';
import { WorkSectionEffectContext } from 'context/WorkSectionEffectContext';
import TransitionLabel from './TransitionLabel';

const SOCIALS = [
  {
    title: 'github',
    label: <GithubSVG />,
    href: 'https://github.com/Skeabrate',
  },
  {
    title: 'gmail',
    label: <GmailSVG />,
    href: 'mailto:sebastianswiecz458@gmail.com',
  },
  {
    title: 'instagram',
    label: <InstagramSVG />,
    href: 'https://www.instagram.com/sebaswieca/',
  },
  {
    title: 'facebook',
    label: <FacebookSVG />,
    href: 'https://www.facebook.com/sebastian.swieczkowski.9/',
  },
];

const Footer = () => {
  const { isWorkSectionEffectActive } = useContext(WorkSectionEffectContext);
  const { setMouseEffect } = useContext(MouseAnimationContext);

  return (
    <footer
      className={cx(
        isWorkSectionEffectActive ? 'text-teal-400' : 'text-slate-400',
        'flex flex-col items-center gap-4 pb-6 pt-12 text-center text-footer tracking-widest transition-colors duration-1000 lg:p-0'
      )}
    >
      <div className="static bottom-0 left-0 flex w-[5vw] flex-col items-center gap-[3vw] lg:fixed">
        <ul className="flex gap-[clamp(0.9rem,1.4vw,1.4vw)] lg:flex-col">
          {SOCIALS.map(({ title, label, href }, index) => (
            <motion.li
              key={title}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.4,
                delay: 2.3 - 0.1 * index,
              }}
              onMouseEnter={() => setMouseEffect(scaleDownEffect())}
              onMouseLeave={() => setMouseEffect(defaultEffect())}
            >
              <a aria-label={title} className="group" href={href} target="_blank" rel="noopener noreferrer">
                <TransitionLabel label={label} />
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 1.6,
          }}
          className={cx(
            isWorkSectionEffectActive ? 'bg-teal-500' : 'bg-slate-700',
            'hidden h-[6vw] w-[0.1vw] origin-bottom transition-colors duration-1000 lg:block'
          )}
        ></motion.p>
      </div>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 1.6,
        }}
        onMouseEnter={() => setMouseEffect(footerEffect())}
        onMouseLeave={() => setMouseEffect(defaultEffect())}
        className="bottom-[0.5vw] lg:fixed lg:px-[1vw]"
      >
        &copy;/ {new Date().getFullYear()}
        <span
          className={cx(
            isWorkSectionEffectActive ? 'bg-teal-500' : 'bg-slate-700',
            'absolute left-full top-1/2 hidden h-[0.1vw] w-[3vw] translate-y-1/2 transition-colors duration-1000 lg:block'
          )}
        ></span>
        <span
          className={cx(
            isWorkSectionEffectActive ? 'bg-teal-500' : 'bg-slate-700',
            'absolute right-full top-1/2 hidden h-[0.1vw] w-[3vw] translate-y-1/2 transition-colors duration-1000 lg:block'
          )}
        ></span>
      </motion.p>

      <div className="vertical-rl bottom-0 right-0 hidden w-[5vw] items-center gap-[3vw] lg:fixed lg:flex">
        <motion.a
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 2,
          }}
          onMouseEnter={() => setMouseEffect(contactEffect())}
          onMouseLeave={() => setMouseEffect(defaultEffect())}
          className="mt-auto hover:text-teal-300"
          href="mailto:sebastianswiecz458@gmail.com"
        >
          sebastianswiecz458@gmail.com
        </motion.a>

        <motion.p
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 1.6,
          }}
          className={cx(
            isWorkSectionEffectActive ? 'bg-teal-500' : 'bg-slate-700',
            'hidden h-[6vw] w-[0.1vw] origin-bottom transition-colors duration-1000 lg:block'
          )}
        ></motion.p>
      </div>
    </footer>
  );
};

export default Footer;
