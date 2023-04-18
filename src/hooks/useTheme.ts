import { useEffect, useMemo, useState } from 'react';
import { THEME_VARIANTS } from '../utils/themeVariants';

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || THEME_VARIANTS[0].id);

  const initialTheme = useMemo(
    () => THEME_VARIANTS.find((variant) => variant.id === localStorage.getItem('theme')) || THEME_VARIANTS[0],
    []
  );

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    document.getElementsByTagName('html')[0].classList.value = currentTheme;
  }, [currentTheme]);

  return { setCurrentTheme, initialTheme };
};
