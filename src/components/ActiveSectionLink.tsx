import cx from 'classnames';
import { PT_Serif } from 'next/font/google';

const ptSerif = PT_Serif({ subsets: ['cyrillic'], weight: '700' });

const ActiveSectionLink = ({ activeSection }: { activeSection: string }) => {
  return (
    <div
      className={cx(
        'fixed bottom-4 left-1/2 -z-10 w-[200%] -translate-x-1/2 text-center text-[20vw] text-slate-400/20 dark:text-slate-900',
        ptSerif.className
      )}
    >
      {activeSection}
    </div>
  );
};

export default ActiveSectionLink;
