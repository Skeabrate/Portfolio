import cx from 'classnames';
import { motion } from 'framer-motion';
import { FILTERS, TFilter } from 'hooks/useFilters';
import { duration, opacity } from 'utils/transitions';

const FiltersBar = ({
  animationState,
  currentFilter,
  handleNewFilter,
}: {
  animationState: boolean;
  currentFilter: TFilter;
  handleNewFilter: (filter: TFilter) => void;
}) => {
  return (
    <ul className="mb-[clamp(2.4rem,6vw,6vw)] flex flex-wrap gap-[clamp(0.8rem,1.4vw,1.4vw)]">
      {FILTERS.map((filter, index) => (
        <motion.li
          animate={{
            opacity: opacity(animationState),
            transform: animationState ? 'translateY(0)' : 'translateY(0.6vw)',
          }}
          transition={{
            duration: duration(animationState),
            delay: animationState ? 0.3 + 0.05 * index : 0,
          }}
          className="flex"
          key={filter}
        >
          <button
            className={cx(
              'flex h-[clamp(3rem,4vw,4vw)] items-center justify-center rounded-full border-[0.1vw] border-teal-400 px-[clamp(2rem,2vw,2vw)] text-teal-400 transition-all duration-300',
              filter === currentFilter ? 'bg-teal-400 text-white' : 'bg-transparent'
            )}
            onClick={() => handleNewFilter(filter)}
          >
            {filter}
          </button>
        </motion.li>
      ))}
    </ul>
  );
};

export default FiltersBar;
