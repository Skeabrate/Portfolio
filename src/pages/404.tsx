import { motion } from 'framer-motion';
import { LogoSVG } from 'assets/SVGs';
import TransitionLabel from 'components/TransitionLabel';

const Error = () => {
  return (
    <>
      <motion.nav
        initial={{
          opacity: 0,
          transform: 'translate(-50%, -1vw)',
        }}
        animate={{
          opacity: 1,
          transform: 'translate(-50%, 0)',
        }}
        transition={{
          duration: 0.4,
          delay: 1,
        }}
        className="fixed left-1/2 top-6 -translate-x-1/2 lg:top-[2vw]"
      >
        <a aria-label="go home" href="/">
          <LogoSVG />
        </a>
      </motion.nav>

      <main className="flex min-h-screen items-center justify-center py-40">
        <header className="w-fit text-center">
          <h1 className="relative mb-[clamp(0.6rem,2vw,2vw)] border-b-[0.1vw] border-b-slate-700 pb-[clamp(0.6rem,2vw,2vw)] text-error leading-none">
            <motion.span
              initial={{ opacity: 0, transform: 'translateY(-1vw)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="block"
            >
              404
            </motion.span>
          </h1>

          <h2 className="relative mb-[clamp(0.6rem,0.4vw,0.4vw)] text-subHeader text-slate-400">
            <motion.span
              initial={{ opacity: 0, transform: 'translateY(-1vw)' }}
              animate={{ opacity: 1, transform: 'translateY(0)' }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="block"
            >
              Page not found
            </motion.span>
          </h2>

          <a href="/" className="group relative mx-auto flex w-fit text-left text-slate-400">
            <TransitionLabel label="Go Home" />
          </a>
        </header>
      </main>
    </>
  );
};

export default Error;
