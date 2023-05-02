import cx from 'classnames';
import { ptSerif } from 'utils/serifFont';

const TransitionLabel = ({ label, padding }: { label: React.ReactNode; padding?: boolean }) => {
  return (
    <span className={cx(padding ? 'pr-2' : '', 'relative block w-full overflow-hidden pb-1 leading-4')}>
      <span
        className={cx(
          ptSerif,
          'fill-child absolute bottom-0 block -translate-y-full text-teal-500 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'
        )}
      >
        {label}
      </span>
      <span className="relative block opacity-100 transition-all duration-300 group-hover:translate-y-full group-hover:opacity-0">
        {label}
      </span>
    </span>
  );
};

export default TransitionLabel;
