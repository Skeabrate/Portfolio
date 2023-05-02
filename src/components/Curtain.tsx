import { LogoSVG } from 'assets/SVGs';
import { motion } from 'framer-motion';

const Curtain = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-gradient-to-b from-slate-800 to-slate-900"
      initial={{
        transform: 'translateY(0)',
      }}
      animate={{
        transform: 'translateY(100%)',
      }}
      transition={{ duration: 0.7, ease: [0.3, 0, 0, 1], delay: 0.8 }}
    >
      <motion.div
        initial={{
          transform: 'scaleY(1)',
        }}
        animate={{
          transform: 'scaleY(0)',
        }}
        transition={{ duration: 0.4, delay: 1 }}
        className="absolute -left-[25%] -top-[28vh] h-[30vh] w-[150%] origin-bottom rounded-t-[50%] bg-slate-800 "
      ></motion.div>

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
      >
        <LogoSVG isWhite />
      </motion.p>
    </motion.div>
  );
};

export default Curtain;
