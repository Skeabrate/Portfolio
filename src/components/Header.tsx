import { useContext, useRef } from 'react';
import cx from 'classnames';
import { motion, useScroll, useTransform } from 'framer-motion';
import { duration, opacity as fadeInOpacity, translate } from 'utils/transitions';
import { WorkSectionEffectContext } from 'context/WorkSectionEffectContext';

const Header = ({ label, animationState }: { label: React.ReactNode; animationState: boolean }) => {
  const { isWorkSectionEffectActive } = useContext(WorkSectionEffectContext);

  const elRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: elRef,
    offset: ['start 15vh', 'start -15vh'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [1, 0], ['0%', '100%']);

  return (
    <header ref={elRef}>
      <h2
        className={cx(
          'relative mb-[clamp(1.2rem,4vw,4vw)] overflow-hidden border-b-[0.1vw] pb-[clamp(0.6rem,2vw,2vw)] text-header font-medium leading-none tracking-tight transition-all duration-1000',
          isWorkSectionEffectActive ? 'border-b-teal-500 text-teal-500' : 'border-b-slate-700'
        )}
      >
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
