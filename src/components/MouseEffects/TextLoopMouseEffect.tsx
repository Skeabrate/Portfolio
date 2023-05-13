import React from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';

const TextLoopMouseEffect = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
      }}
      animate={{
        opacity: 1,
        width: 'auto',
        height: 'auto',
        marginBlock: '0.4vw',
      }}
      exit={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
        marginBlock: '0',
      }}
      transition={{
        duration: 0.2,
      }}
      className="relative block overflow-hidden text-[1vw] font-medium uppercase text-white"
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
          text.length < 7 ? 'animate-textLoopFast' : text.length < 12 ? 'animate-textLoopMedium' : 'animate-textLoop',
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
          text.length < 7 ? 'animate-textLoopFast' : text.length < 12 ? 'animate-textLoopMedium' : 'animate-textLoop',
          'relative block w-auto whitespace-nowrap px-[0.5vw]'
        )}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default TextLoopMouseEffect;
