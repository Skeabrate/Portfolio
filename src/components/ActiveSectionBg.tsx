import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ROUTES } from 'utils/routes';
import { ActiveSectionContext } from 'context/ActiveSectionContext';

const ActiveSectionBg = () => {
  const { activeSection } = useContext(ActiveSectionContext);

  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: 'translate(-50%, 2vw)',
      }}
      animate={{
        opacity: 1,
        transform: 'translate(-50%, 0)',
      }}
      transition={{ duration: 0.4, delay: 1.45 }}
      className="fixed bottom-[1vw] left-1/2 -z-10 w-[200%] -translate-x-1/2 text-center text-[20vw] font-bold leading-none text-slate-900/30"
    >
      <motion.span
        key={activeSection.label}
        initial={{
          opacity: 0,
          transform: 'translateY(2vw)',
        }}
        animate={{
          opacity: 1,
          transform: 'translateY(0)',
        }}
        transition={{ duration: 0.5 }}
        className="block"
      >
        {activeSection.label === ROUTES.about.label ? activeSection.label + ' me' : activeSection.label}.
      </motion.span>
    </motion.div>
  );
};

export default ActiveSectionBg;
