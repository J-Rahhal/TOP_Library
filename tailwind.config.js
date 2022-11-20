/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/js/.*js"],
  theme: {
    screens: {
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
    },
    extend: {
      colors: {
        'brightGray': '#EBEBEB',
        'almostAqua': '#CAD3C1',
        'eerieBlack': '#1F1F1F'
      },
    },
  },
  plugins: [],
};
