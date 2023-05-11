import { useContext } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { FacebookSVG, GithubSVG, GmailSVG, InstagramSVG } from 'assets/SVGs';
import { WorkSectionEffectContext } from 'context/WorkSectionEffectContext';
import TransitionLabel from './TransitionLabel';

const Footer = () => {
  const { isWorkSectionEffectActive } = useContext(WorkSectionEffectContext);

  return (
    <footer
      className={cx(
        isWorkSectionEffectActive ? 'text-teal-400' : 'text-slate-400',
        'flex flex-col items-center gap-4 pb-6 pt-12 text-center text-footer tracking-widest transition-colors duration-700 lg:p-0'
      )}
    >
      <div className="static bottom-0 left-0 flex w-[5vw] flex-col items-center gap-[3vw] lg:fixed">
        <ul className="flex gap-[clamp(0.9rem,1.4vw,1.4vw)] lg:flex-col">
          <motion.li
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
              delay: 2.3,
            }}
          >
            <a
              aria-label="github"
              className="group"
              href="https://github.com/Skeabrate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TransitionLabel label={<GithubSVG />} />
            </a>
          </motion.li>
          <motion.li
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
              delay: 2.2,
            }}
          >
            <a
              aria-label="gmail"
              className="group"
              href="mailto:sebastianswiecz458@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TransitionLabel label={<GmailSVG />} />
            </a>
          </motion.li>
          <motion.li
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
              delay: 2.1,
            }}
          >
            <a
              aria-label="instagram"
              className="group"
              href="https://www.instagram.com/sebaswieca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TransitionLabel label={<InstagramSVG />} />
            </a>
          </motion.li>
          <motion.li
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
              delay: 2,
            }}
          >
            <a
              aria-label="facebook"
              className="group"
              href="https://www.facebook.com/sebastian.swieczkowski.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TransitionLabel label={<FacebookSVG />} />
            </a>
          </motion.li>
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
