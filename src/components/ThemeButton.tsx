'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'hooks/useTheme';
import { whileTap } from 'utils/transitions';

const ThemeButton = () => {
  const { toggleTheme, themeLabel } = useTheme();

  return (
    <motion.button whileTap={whileTap} className="p-3" onClick={toggleTheme}>
      {themeLabel}
    </motion.button>
  );
};

export default ThemeButton;
