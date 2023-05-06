import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = ({ label, isInView }: { label: React.ReactNode; isInView: boolean }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elRef,
    offset: ['start 15vh', 'start -20vh'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [1, 0], ['0%', '100%']);

  return (
    <header ref={elRef}>
      <h2 className="relative mb-[clamp(0.6rem,6vw,6vw)] overflow-hidden border-b-[0.1vw] border-b-slate-700 pb-[clamp(0.6rem,2vw,2vw)] text-header leading-none tracking-tight">
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
