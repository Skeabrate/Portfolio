import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';

const TextLoop = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        width: '1vw',
        height: '1vh',
      }}
      animate={{
        opacity: 1,
        width: 'auto',
        height: 'auto',
      }}
      exit={{
        opacity: 0,
        width: '1vw',
        height: '1vh',
      }}
      transition={{
        duration: 0.2,
      }}
      className="relative my-[0.4vw] block overflow-hidden text-[1vw] font-medium uppercase text-white"
    >
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cx(
          text.toLowerCase() === 'resume' ? 'animate-textLoopFaster' : 'animate-textLoop',
          'absolute -left-full bottom-0 block whitespace-nowrap px-[0.5vw]'
        )}
      >
        {text}
      </motion.span>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cx(
          text.toLowerCase() === 'resume' ? 'animate-textLoopFaster' : 'animate-textLoop',
          'relative block w-auto whitespace-nowrap px-[0.5vw]'
        )}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default TextLoop;