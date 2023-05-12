import React from 'react';
import { motion } from 'framer-motion';

const IconEffect = ({ icon }: { icon: React.ReactNode }) => {
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
      className="relative m-[0.4vw] flex items-center justify-center"
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
          duration: 0.4,
        }}
      >
        {icon}
      </motion.span>
    </motion.div>
  );
};

export default IconEffect;
