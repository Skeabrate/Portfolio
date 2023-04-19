'use client';

import { useTheme } from 'hooks/useTheme';

const ThemeButton = () => {
  const { toggleTheme, themeLabel } = useTheme();

  return <button onClick={toggleTheme}>{themeLabel}</button>;
};

export default ThemeButton;
