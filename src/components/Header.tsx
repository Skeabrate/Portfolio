import { useRef } from 'react';
import cx from 'classnames';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ptSerif } from 'utils/serifFont';

const Header = ({ label, isInView }: { label: string; isInView: boolean }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elRef,
    offset: ['start 20vh', 'start -100px'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [1, 0], ['0%', '100%']);

  return (
    <header ref={elRef}>
      <h2
        className={cx(
          ptSerif,
          'relative mb-6 overflow-hidden border-b-2 border-b-slate-300/50 pb-2 pt-2 text-header font-bold leading-none md:mb-12 md:pb-6 lg:mb-16'
        )}
      >
        <motion.span
          animate={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)' }}
          transition={{ duration: 0.4 }}
          className="block"
        >
          <motion.span className="block" style={{ y, opacity }}>
            {label}
          </motion.span>
        </motion.span>
      </h2>
    </header>
  );
};

export default Header;
