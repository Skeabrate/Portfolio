import { useContext } from 'react';
import { PT_Serif } from 'next/font/google';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { ActiveSectionContext } from 'context/ActiveSectionContext';

const ptSerif = PT_Serif({ subsets: ['cyrillic'], weight: '700', display: 'swap' });

const ActiveSectionBg = () => {
  const { activeSection } = useContext(ActiveSectionContext);

  return (
    <div
      className={cx(
        'fixed bottom-4 left-1/2 -z-10 w-[200%] -translate-x-1/2 text-center text-[20vw] text-slate-400/10 dark:text-slate-900/50',
        ptSerif.className
      )}
    >
      <motion.span
        key={activeSection}
        initial={{
          opacity: 0,
          transform: 'translateY(10px)',
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
    </div>
  );
};

export default ActiveSectionBg;
