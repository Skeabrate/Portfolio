import { useEffect, useState } from 'react';
import { debounce } from 'utils/debounce';

export const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  const debounceSetWindowHeightOnResize = debounce(() => {
    setWindowHeight(window.innerHeight);
  }, 300);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    window.addEventListener('resize', debounceSetWindowHeightOnResize);
    return () => window.removeEventListener('resize', debounceSetWindowHeightOnResize);
  }, [debounceSetWindowHeightOnResize]);

  return { windowHeight };
};
