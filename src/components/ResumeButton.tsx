import { useContext } from 'react';
import cx from 'classnames';
import { defaultEffect, loopedTextEffect } from 'hooks/useMouseEffect';
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
      onMouseEnter={() => setMouseEffect(loopedTextEffect({ text: 'resume' }))}
      onMouseLeave={() => setMouseEffect(defaultEffect())}
      href={resumeSrc}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        isNav ? 'h-[clamp(3rem,2.8vw,8rem)]' : 'h-[clamp(3rem,4vw,10rem)]',
        'flex items-center justify-center rounded-full border-[0.1vw] border-teal-400 text-teal-400 transition-all duration-300',
        isNav
          ? scrollY > 10
            ? 'invisible w-[clamp(3rem,2.8vw,8rem)]'
            : 'visible w-[clamp(8rem,8vw,22rem)]'
          : 'w-fit px-[clamp(2rem,2vw,6rem)]'
      )}
    >
      <span className={cx('transition-opacity duration-[200ms]', scrollY > 10 ? 'opacity-0' : 'opacity-100 delay-75')}>
        Resume
      </span>
    </a>
  );
};

export default ResumeButton;
