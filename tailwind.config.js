const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'turquoise-blue': '#2FF3FF',
        'light-green': '#25CA83',
        'light-red': '#F44960',
        'xlight-green': 'CFFFEA',
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
