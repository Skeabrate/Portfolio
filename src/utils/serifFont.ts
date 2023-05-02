import { PT_Serif } from 'next/font/google';

const ptSerifFont = PT_Serif({ subsets: ['cyrillic'], weight: '700', display: 'swap' });
export const ptSerif = ptSerifFont.className;
