import { useContext } from 'react';
import cx from 'classnames';
import { defaultEffect, loopedText } from 'hooks/useMouseEffect';
import { MouseAnimationContext } from 'context/MouseAnimationContext';

const ResumeButton = ({
  resumeSrc,
  scrollY = 0,
  isNav,
}: {
  resumeSrc: string | undefined;
  scrollY?: number;
  isNav?: boolean;
}) => {
  const { setMouseEffect } = useContext(MouseAnimationContext);

  return (
    <a
      onMouseEnter={() => setMouseEffect(loopedText('resume'))}
      onMouseLeave={() => setMouseEffect(defaultEffect())}
      href={resumeSrc}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        isNav ? 'h-[clamp(3rem,2.8vw,2.8vw)]' : 'h-[clamp(3rem,4vw,4vw)]',
        'flex items-center justify-center rounded-full border-[0.1vw] border-teal-400 text-teal-400 transition-all duration-300',
        isNav
          ? scrollY > 10
            ? 'invisible w-[clamp(3rem,2.8vw,2.8vw)]'
            : 'visible w-[clamp(8rem,8vw,8vw)]'
          : 'w-fit px-[clamp(2rem,2vw,2vw)]'
      )}
    >
      <span className={cx('transition-opacity duration-[200ms]', scrollY > 10 ? 'opacity-0' : 'opacity-100 delay-75')}>
        Resume
      </span>
    </a>
  );
};

export default ResumeButton;
