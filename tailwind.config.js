/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'light-gradient': 'linear-gradient(90deg, #FF6FD8 0%, #3813C2 100%)',
        'dark-gradient': 'linear-gradient(90deg, #3813C2 0%, #121212 100%)',
      },
    },
  },
  plugins: [],
};
