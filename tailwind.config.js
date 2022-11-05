/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        "cyan": '#03DAC6',
        "darkGray": '#292929',
        "darkerGray": '#1F1F1F'
      }
    },
  },
  plugins: [],
}
