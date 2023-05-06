/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        sectionMobile: 'clamp(4rem, 10vh, 10vh)',
        sectionTablet: 'clamp(6rem, 14vh, 14vh)',
        sectionDesktop: 'clamp(10rem, 24vh, 24vh)',
      },
      fontSize: {
        default: 'clamp(1rem, 1.5vw, 1.5vw)',
        nav: 'clamp(1rem, 1vw, 1vw)',
        header: 'clamp(2.5rem, 8vw, 8vw)',
        subHeader: 'clamp(1.3rem, 2.8vw, 2.8vw)',
        footer: 'clamp(0.7rem, 0.7vw, 0.7vw)',
        error: 'clamp(6rem, 16vw, 16vw)',
      },
    },
  },
  plugins: [],
};
