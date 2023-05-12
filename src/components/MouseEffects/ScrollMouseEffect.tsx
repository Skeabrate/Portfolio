import React from 'react';
import { motion } from 'framer-motion';

const ScrollMouseEffect = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
      }}
      animate={{
        opacity: 1,
        width: '4vw',
        height: '4vw',
      }}
      exit={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
      }}
      transition={{
        duration: 0.2,
      }}
      className="flex items-center justify-center"
    >
      <motion.span
        initial={{
          opacity: 0,
          transform: 'translateY(0.8vw)',
        }}
        animate={{
          opacity: 1,
          transform: 'translateY(0)',
        }}
        exit={{
          opacity: 0,
          transform: 'translateY(0.8vw)',
        }}
        transition={{
          duration: 0.2,
        }}
        className="flex flex-col items-center text-[clamp(1rem,0.8vw,0.8vw)] font-medium tracking-wide text-white"
      >
        <span>Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
          width="clamp(1rem, 1vw, 1vw)"
          height="clamp(1rem, 1vw, 1vw)"
          viewBox="0 0 24 24"
        >
          <path d="M12 21l-12-18h24z" />
        </svg>
      </motion.span>
    </motion.div>
  );
};

export default ScrollMouseEffect;
