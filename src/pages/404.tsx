import { LogoSVG } from 'assets/SVGs';
import cx from 'classnames';
import TransitionLabel from 'components/TransitionLabel';
import { motion } from 'framer-motion';
import { ptSerif } from 'utils/serifFont';

const Error = () => {
  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          transform: 'translate(-50%, -10px)',
        }}
        animate={{
          opacity: 1,
          transform: 'translate(-50%, 0)',
        }}
        transition={{
          duration: 0.4,
          delay: 1,
        }}
        className="fixed left-1/2 top-2 -translate-x-1/2"
      >
        <a aria-label="go home" href="/">
          <LogoSVG />
        </a>
      </motion.nav>

      <main className="flex min-h-screen items-center justify-center py-40">
        <header className="w-fit text-center">
          <h1
            className={cx(
              ptSerif,
              'relative mb-4 border-b-2 border-b-slate-300/50 pb-2 text-error font-bold leading-none md:mb-6 md:pb-4'
            )}
          >
            <motion.span
              initial={{ opacity: 0, transform: 'translateY(-10px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="block"
            >
              404
            </motion.span>
          </h1>

          <h2 className="relative mb-3 text-xl font-bold text-slate-400 sm:text-3xl lg:mb-5 lg:text-4xl">
            <motion.span
              initial={{ opacity: 0, transform: 'translateY(-10px)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="block"
            >
              Page not found
            </motion.span>
          </h2>

          <a href="/" className="group relative mx-auto flex w-24 px-2 py-1 text-left text-slate-400">
            <TransitionLabel label="Go Home" />
          </a>
        </header>
      </main>
    </>
  );
};

export default Error;
