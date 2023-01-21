const defaultTheme = require ("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "penguin-color": "#FABE4C",
        "penguin-bg": "#FFFBF0",
        "penguin-para": "#363958",
        "gradient-1": "#A4BC46",
        "gradient-2": "#85A019"
      },
      lineHeight: {
        "penguin-header": "96px"
      },
      fontFamily: {
        mono: ['"Bebas Neue"', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [],
}
