import { motion } from 'framer-motion';
import { useTheme } from 'hooks/useTheme';
import { whileTap } from 'utils/transitions';

const ThemeButton = () => {
  const { toggleTheme, themeLabel } = useTheme();

  return (
    <motion.button
      whileTap={whileTap}
      className="flex aspect-square h-full items-center justify-center rounded focus:bg-slate-200 focus:outline focus:outline-4 focus:outline-slate-300 dark:from-white dark:to-white hover:dark:bg-slate-900/40 focus:dark:bg-slate-900/40 focus:dark:outline-slate-900"
      onClick={toggleTheme}
    >
      {themeLabel}
    </motion.button>
  );
};

export default ThemeButton;
