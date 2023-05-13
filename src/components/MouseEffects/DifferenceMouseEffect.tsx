import React from 'react';
import { motion } from 'framer-motion';

const DifferenceMouseEffect = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
      }}
      animate={{
        opacity: 1,
        width: 'clamp(4rem,4vw,4vw)',
        height: 'clamp(4rem,4vw,4vw)',
      }}
      exit={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
      }}
      transition={{
        duration: 0.2,
      }}
    ></motion.div>
  );
};

export default DifferenceMouseEffect;
