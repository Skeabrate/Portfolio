/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        sectionMobile: 'clamp(4rem, 10vh, 10vh)',
        sectionTablet: 'clamp(6rem, 14vh, 14vh)',
        sectionDesktop: 'clamp(10rem, 28vh, 28vh)',
      },
      fontSize: {
        default: 'clamp(1rem, 1.2vw, 1.2vw)',
        header: 'clamp(2.5rem, 7.6vw, 7.6vw)',
        subHeader: 'clamp(1.3rem, 2.6vw, 2.6vw)',
        footer: 'clamp(0.7rem, 0.7vw, 0.7vw)',
        error: 'clamp(6rem, 16vw, 16vw)',
      },
      keyframes: {
        textLoop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        textLoop: 'textLoop 2.6s linear infinite',
        textLoopFaster: 'textLoop 1.6s linear infinite',
      },
    },
  },
  plugins: [],
};
