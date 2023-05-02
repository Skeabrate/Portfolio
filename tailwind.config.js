/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        header: 'clamp(3rem, 8vw, 9rem)',
      },
    },
  },
  plugins: [],
};
