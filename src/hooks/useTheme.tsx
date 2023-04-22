import { useEffect, useState } from 'react';
import { MoonIcon } from 'components/Theme/MoonIcon';
import { SunIcon } from 'components/Theme/SunIcon';

export const THEMES = {
  light: {
    id: 'light',
    label: <SunIcon />,
  },
  dark: {
    id: 'dark',
    label: <MoonIcon />,
  },
};

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(THEMES.dark.id);

  const themeLabel = currentTheme === THEMES.dark.id ? THEMES.dark.label : THEMES.light.label;
  const toggleTheme = () =>
    setCurrentTheme((currTheme) => (currTheme === THEMES.dark.id ? THEMES.light.id : THEMES.dark.id));

  useEffect(() => {
    const userLocalStorageThemeSetting = localStorage.getItem('theme') || THEMES.dark.id;
    setCurrentTheme(userLocalStorageThemeSetting);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
    document.getElementsByTagName('html')[0].classList.value = currentTheme;
  }, [currentTheme]);

  return { toggleTheme, themeLabel };
};
