import { PT_Serif } from 'next/font/google';
import { motion } from 'framer-motion';
import cx from 'classnames';

const ptSerif = PT_Serif({ subsets: ['cyrillic'], weight: '400', display: 'swap' });

const TransitionCurtain = () => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-gradient-to-b from-slate-950 to-slate-800"
        initial={{ transform: 'translateY(100%)' }}
        exit={{ transform: 'translateY(0)' }}
        transition={{ duration: 0.6, ease: [0.3, 0, 0, 1] }}
      ></motion.div>

      <motion.div
        className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-gradient-to-b from-slate-950 to-slate-800"
        initial={{
          transform: 'translateY(0)',
        }}
        animate={{
          transform: 'translateY(-100%)',
        }}
        transition={{ duration: 0.6, ease: [0.3, 0, 0, 0.8], delay: 0.5 }}
      >
        <motion.div
          initial={{
            transform: 'scaleY(1)',
          }}
          animate={{
            transform: 'scaleY(0)',
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute -bottom-[28vh] -left-[5%] h-[30vh] w-[110%] origin-top rounded-b-[100%] bg-slate-800 "
        ></motion.div>

        <motion.p
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.6,
            ease: [0.18, 0.44, 0.79, 0.46],
          }}
          className={cx(ptSerif.className, 'text-6xl text-slate-300')}
        >
          Hello
        </motion.p>
      </motion.div>
    </>
  );
};

export default TransitionCurtain;
