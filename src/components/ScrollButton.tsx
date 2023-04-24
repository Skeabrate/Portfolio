import { motion } from 'framer-motion';
import { ArrowSVG } from 'assets/SVGs';
import { TRoute } from 'context/ActiveSectionContext';

const ScrollButton = ({ label, href }: { label: string; href: TRoute }) => {
  return (
    <motion.a
      initial={{ opacity: 0, transform: 'translateY(10px)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      transition={{ duration: 0.4, delay: 3.3 }}
      className="group relative flex w-fit items-end gap-3 py-1 font-bold text-teal-500 dark:font-normal dark:text-teal-400"
      href={'#' + href}
    >
      <ArrowSVG />
      {label}
      <motion.span
        initial={{ opacity: 0, transform: 'scaleX(0)' }}
        animate={{ opacity: 1, transform: 'scaleX(1)' }}
        transition={{ duration: 0.3, delay: 3.5 }}
        className="absolute bottom-0 left-0 h-px w-2/3 origin-left bg-teal-500 transition-all duration-300 group-hover:w-full dark:bg-teal-400"
      />
    </motion.a>
  );
};

export default ScrollButton;
