import { motion } from 'framer-motion';

const Header = ({ label, isInView }: { label: string; isInView: boolean }) => {
  return (
    <header>
      <h2 className="relative mb-1 overflow-hidden pb-1 pt-2 text-4xl font-bold sm:mb-2 sm:text-6xl lg:text-7xl">
        <motion.span
          animate={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)' }}
          transition={{ duration: 0.4 }}
          className="block"
        >
          {label}
        </motion.span>
      </h2>
    </header>
  );
};

export default Header;
