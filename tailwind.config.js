module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        GT: ['"GT America"', 'sans-serif'],
        Clutch: ['"Clutch"', 'sans-serif'],
        Curl: ['"Curl"', 'sans-serif'],
        GS: ['"Google Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': "url('/treeoverlay.png')"
      }
    },
  },
  plugins: [],
};
