import React from 'react';
import { motion } from 'framer-motion';

const IconEffect = ({ icon }: { icon: React.ReactNode }) => {
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
        margin: '0.6vw',
      }}
      exit={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
        margin: '0',
      }}
      transition={{
        duration: 0.2,
      }}
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
      >
        {icon}
      </motion.span>
    </motion.div>
  );
};

export default IconEffect;
