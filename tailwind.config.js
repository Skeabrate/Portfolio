/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        sectionMobile: 'clamp(4rem, 10vh, 6rem)',
        sectionTablet: 'clamp(6rem, 14vh, 12rem)',
        sectionDesktop: 'clamp(10rem, 24vh, 16rem)',
      },
      fontSize: {
        header: 'clamp(3rem, 8vw, 9rem)',
        error: 'clamp(6rem, 16vw, 14rem)',
      },
    },
  },
  plugins: [],
};
