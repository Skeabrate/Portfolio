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
        default: 'clamp(1rem, 1.2vw, 3rem)',
        header: 'clamp(2.5rem, 7.6vw, 18rem)',
        subHeader: 'clamp(1.3rem, 2.6vw, 6rem)',
        footer: 'clamp(0.7rem, 0.7vw, 1.6rem)',
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
        textLoopMedium: 'textLoop 1.8s linear infinite',
        textLoopFast: 'textLoop 1.4s linear infinite',
      },
    },
  },
  plugins: [],
};
