import { motion } from 'framer-motion';
import { LogoSVG } from 'assets/SVGs';

const Curtain = () => {
  return (
    <motion.div
      className="h-screen-fixed fixed inset-0 z-50 flex w-full items-center justify-center bg-slate-950"
      initial={{
        transform: 'translateY(0)',
      }}
      animate={{
        transform: 'translateY(100%)',
      }}
      transition={{ duration: 0.8, ease: [0.3, 0, 0, 0.9], delay: 0.8 }}
    >
      <motion.div
        initial={{
          opacity: 1,
          transform: 'translateY(0)',
        }}
        animate={{
          opacity: 0,
          transform: 'translateY(2vw)',
        }}
        transition={{
          duration: 0.5,
          delay: 0.7,
        }}
      >
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.15,
          }}
        >
          <LogoSVG />
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Curtain;
