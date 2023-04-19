import { useState, useEffect } from 'react';

export const useScroll = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st < 30) setIsOnTop(true);
      else setIsOnTop(false);

      if (st > lastScrollTop && st > 50) {
        setHideNav(true);
      } else setHideNav(false);

      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isOnTop, hideNav };
};
