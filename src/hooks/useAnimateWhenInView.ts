import { useContext, useEffect, useState } from 'react';
import { ActiveSectionContext } from 'context/ActiveSectionContext';
import { ScrollContext } from 'context/ScrollContext';

export const useAnimateWhenInView = (ref: React.RefObject<HTMLDivElement>, threshold = 1 / 4) => {
  const [isInView, setIsInView] = useState(false);
  const { scrollY } = useContext(ScrollContext);
  const { activeSection } = useContext(ActiveSectionContext);

  useEffect(() => {
    if (!ref.current) return;
    const animationStartPoint = window.innerHeight * threshold;

    if (Math.floor(ref.current.getBoundingClientRect().top + animationStartPoint) <= window.innerHeight)
      setIsInView(true);
    else setIsInView(false);
    if (Math.floor(ref.current.getBoundingClientRect().bottom) <= animationStartPoint) setIsInView(false);
  }, [scrollY, ref, threshold, activeSection]);

  return { isInView };
};
