import React from 'react';
import { motion } from 'framer-motion';

const ContactMouseEffect = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        width: '1vw',
        height: '1vw',
      }}
      animate={{
        opacity: 1,
        width: '2.8vw',
        height: '2.8vw',
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
        <svg
          className="fill-white"
          width="clamp(1.4rem, 1.6vw, 1.6vw)"
          height="clamp(1.4rem, 1.6vw, 1.6vw)"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm6.001 16.917c.552 0 .999-.448.999-.999v-7.919c0-.551-.448-.999-.999-.999h-12.002c-.551 0-.999.448-.999.999v7.919c0 .551.448.999.999.999h12.002zm-6.001-3.55l-5.45-3.782-.011 6.748h10.899v-6.748l-5.438 3.782zm5.174-5.784c-1.527 1.064-5.174 3.634-5.174 3.634l-5.203-3.634h10.377z" />
        </svg>
      </motion.span>
    </motion.div>
  );
};

export default ContactMouseEffect;
