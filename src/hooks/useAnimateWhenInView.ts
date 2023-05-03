import { useContext, useEffect, useState } from 'react';
import { ScrollContext } from 'context/ScrollContext';

export const useAnimateWhenInView = (ref: React.RefObject<HTMLDivElement>) => {
  const [isInView, setIsInView] = useState(false);
  const { scrollY } = useContext(ScrollContext);

  useEffect(() => {
    if (!ref.current) return;
    const animationStartPoint = (window.innerHeight * 1) / 4;

    if (Math.floor(ref.current.getBoundingClientRect().top + animationStartPoint) <= window.innerHeight)
      setIsInView(true);
    else setIsInView(false);
    if (Math.floor(ref.current.getBoundingClientRect().bottom) <= animationStartPoint) setIsInView(false);
  }, [scrollY, ref]);

  return { isInView };
};
