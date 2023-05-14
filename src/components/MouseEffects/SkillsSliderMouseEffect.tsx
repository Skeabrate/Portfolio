import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SkillsSliderMouseEffect = ({ innerTextAnimation }: { innerTextAnimation: string }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
      }}
      animate={{
        opacity: 1,
        width: 'clamp(13rem,13vw,13vw)',
        height: 'clamp(2.6rem,3vw,3vw)',
        transition: {
          duration: 0.2,
        },
      }}
      exit={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
      }}
      className="relative overflow-hidden text-white"
    >
      <AnimatePresence initial={false}>
        <motion.span
          key={innerTextAnimation}
          initial={{
            opacity: 0,
            transform: 'translate(-50%, -90%)',
          }}
          animate={{
            opacity: 1,
            transform: 'translate(-50%, -50%)',
            transition: {
              duration: 0.4,
            },
          }}
          exit={{
            opacity: 0,
            transform: 'translate(-50%, 10%)',
            transition: {
              duration: 0.2,
            },
          }}
          className="absolute left-1/2 top-1/2 w-[clamp(13rem,14vw,14vw)] -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(1rem,1vw,1vw)] font-medium tracking-wide"
        >
          {innerTextAnimation}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillsSliderMouseEffect;
