import cx from 'classnames';
import { motion } from 'framer-motion';
import { ptSerif } from 'utils/serifFont';

const Header = ({ label, isInView }: { label: string; isInView: boolean }) => {
  return (
    <header>
      <h2
        className={cx(
          ptSerif,
          'relative mb-6 overflow-hidden border-b-2 border-b-slate-300/50 pb-2 pt-2 text-header font-bold leading-none md:mb-12 md:pb-4 lg:mb-16'
        )}
      >
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
