import { PT_Serif } from 'next/font/google';
import { motion } from 'framer-motion';
import cx from 'classnames';
import { useActiveLink } from 'hooks/useActiveLink';

const ptSerif = PT_Serif({ subsets: ['cyrillic'], weight: '700', display: 'swap' });

const ActiveLinkBg = () => {
  const { activeLink } = useActiveLink();

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.3, delay: 3.4 }}
      className={cx(
        'fixed bottom-4 left-1/2 -z-10 w-[200%] -translate-x-1/2 text-center text-[20vw] text-slate-400/10 dark:text-slate-900/50',
        ptSerif.className
      )}
    >
      <motion.span
        key={activeLink}
        initial={{
          opacity: 0,
          transform: 'translateY(10px)',
        }}
        animate={{
          opacity: 1,
          transform: 'translateY(0)',
        }}
        transition={{ duration: 0.3 }}
        className="block"
      >
        {activeLink}.
      </motion.span>
    </motion.div>
  );
};

export default ActiveLinkBg;
