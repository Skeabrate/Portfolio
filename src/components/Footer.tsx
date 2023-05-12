import { useContext } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { FacebookSVG, GithubSVG, GmailSVG, InstagramSVG } from 'assets/SVGs';
import { defaultEffect, iconEffect, scaleDown } from 'hooks/useMouseEffect';
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
        'flex flex-col items-center gap-4 pb-6 pt-12 text-center text-footer tracking-widest transition-colors duration-700 lg:p-0'
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
              onMouseEnter={() => setMouseEffect(scaleDown())}
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
            'hidden h-[6vw] w-[0.1vw] origin-bottom transition-colors duration-700 lg:block'
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
        className="bottom-[0.5vw] lg:fixed lg:px-[1vw]"
      >
        &copy;/ {new Date().getFullYear()}
        <span
          className={cx(
            isWorkSectionEffectActive ? 'bg-teal-500' : 'bg-slate-700',
            'absolute left-full top-1/2 hidden h-[0.1vw] w-[3vw] translate-y-1/2 transition-colors duration-700 lg:block'
          )}
        ></span>
        <span
          className={cx(
            isWorkSectionEffectActive ? 'bg-teal-500' : 'bg-slate-700',
            'absolute right-full top-1/2 hidden h-[0.1vw] w-[3vw] translate-y-1/2 transition-colors duration-700 lg:block'
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
          onMouseEnter={() =>
            setMouseEffect(
              iconEffect(
                <svg
                  className="fill-white"
                  width="clamp(1.4rem, 1.6vw, 1.6vw)"
                  height="clamp(1.4rem, 1.6vw, 1.6vw)"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.001 16.917c.552 0 .999-.448.999-.999v-7.919c0-.551-.448-.999-.999-.999h-12.002c-.551 0-.999.448-.999.999v7.919c0 .551.448.999.999.999h12.002zm-6.001-3.55l-5.45-3.782-.011 6.748h10.899v-6.748l-5.438 3.782zm5.174-5.784c-1.527 1.064-5.174 3.634-5.174 3.634l-5.203-3.634h10.377z" />
                </svg>
              )
            )
          }
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
            'hidden h-[6vw] w-[0.1vw] origin-bottom transition-colors duration-700 lg:block'
          )}
        ></motion.p>
      </div>
    </footer>
  );
};

export default Footer;
