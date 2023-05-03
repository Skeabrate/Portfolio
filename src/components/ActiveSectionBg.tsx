import { useContext } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { ptSerif } from 'utils/serifFont';
import { ActiveSectionContext } from 'context/ActiveSectionContext';

const ActiveSectionBg = () => {
  const { activeSection } = useContext(ActiveSectionContext);

  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: 'translate(-50%, 40px)',
      }}
      animate={{
        opacity: 1,
        transform: 'translate(-50%, 0)',
      }}
      transition={{ duration: 0.4, delay: 1.45 }}
      className={cx(
        'fixed bottom-8 left-1/2 -z-10 w-[200%] -translate-x-1/2 text-center text-[20vw] leading-none text-slate-400/10',
        ptSerif
      )}
    >
      <motion.span
        key={activeSection}
        initial={{
          opacity: 0,
          transform: 'translateY(20px)',
        }}
        animate={{
          opacity: 1,
          transform: 'translateY(0)',
        }}
        transition={{ duration: 0.4 }}
        className="block"
      >
        {activeSection}.
      </motion.span>
    </motion.div>
  );
};

export default ActiveSectionBg;
