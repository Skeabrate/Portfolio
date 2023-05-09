import cx from 'classnames';
import { FILTERS, TFilter } from 'hooks/useFilters';

const FiltersBar = ({
  currentFilter,
  handleNewFilter,
}: {
  currentFilter: TFilter;
  handleNewFilter: (filter: TFilter) => void;
}) => {
  return (
    <ul className="mb-[clamp(0.6rem,6vw,6vw)] flex flex-wrap gap-[clamp(1rem,1.4vw,1.4vw)]">
      {FILTERS.map((filter) => (
        <li className="flex" key={filter}>
          <button
            className={cx(
              'flex h-[clamp(3rem,4vw,4vw)] items-center justify-center rounded-full border-[0.1vw] border-teal-400 px-[clamp(2rem,2vw,2vw)] text-teal-400 transition-all duration-300',
              filter === currentFilter ? 'bg-teal-400 text-white' : 'bg-transparent'
            )}
            onClick={() => handleNewFilter(filter)}
          >
            {filter}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FiltersBar;
