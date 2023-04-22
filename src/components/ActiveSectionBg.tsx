import { useContext } from 'react';
import { PT_Serif } from 'next/font/google';
import cx from 'classnames';
import { ActiveSectionContext } from 'context/ActiveSectionContext';

const ptSerif = PT_Serif({ subsets: ['cyrillic'], weight: '700', display: 'swap' });

const ActiveSectionBg = () => {
  const { activeSection } = useContext(ActiveSectionContext);

  return (
    <div
      className={cx(
        'fixed bottom-4 left-1/2 -z-10 w-[200%] -translate-x-1/2 text-center text-[20vw] text-slate-400/10 dark:text-slate-900/50',
        ptSerif.className
      )}
    >
      {activeSection}.
    </div>
  );
};

export default ActiveSectionBg;
