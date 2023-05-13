import { useEffect, useState } from 'react';

export const useScreenSettings = () => {
  const [displayMouseEffect, setDisplayMouseEffect] = useState(false);

  useEffect(() => {
    const isTouchEnabled = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isScreenBig = window.matchMedia('(min-width: 1024px)').matches;

    setDisplayMouseEffect(isScreenBig && !isTouchEnabled);
  }, []);

  return { displayMouseEffect };
};
