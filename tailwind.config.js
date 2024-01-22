/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        league: ['League Spartan', 'sans-serif'],
        rubik: ['Rubik Burned', 'sans-serif'],
        niramit: ['Niramit', 'sans-serif'],
      },
      colors: {},
    },
  },
  plugins: [require('daisyui')],
};
