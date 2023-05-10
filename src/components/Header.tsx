import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { opacity as fadeInOpacity, translate, duration } from 'utils/transitions';

const Header = ({ label, animationState }: { label: React.ReactNode; animationState: boolean }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elRef,
    offset: ['start 15vh', 'start -20vh'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [1, 0], ['0%', '100%']);

  return (
    <header ref={elRef}>
      <h2 className="relative mb-[clamp(0.6rem,4vw,4vw)] overflow-hidden border-b-[0.1vw] border-b-slate-700 pb-[clamp(0.6rem,2vw,2vw)] text-header font-medium leading-none tracking-tight">
        <motion.span
          animate={{ opacity: fadeInOpacity(animationState), transform: translate(animationState) }}
          transition={{ duration: duration(animationState) }}
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
