import { useContext } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { WorkSectionContext } from 'context/WorkSectionContext';
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
  const { isWorkSectionEffectActive } = useContext(WorkSectionContext);

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
              'flex h-[clamp(3rem,4vw,4vw)] items-center justify-center rounded-full border-[0.1vw] px-[clamp(2rem,2vw,2vw)] transition-all duration-500',
              isWorkSectionEffectActive ? 'border-teal-400' : 'border-slate-700',
              isWorkSectionEffectActive
                ? filter === currentFilter
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-transparent text-teal-400'
                : filter === currentFilter
                ? 'bg-slate-400 text-slate-950'
                : ' bg-transparent text-slate-400'
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
