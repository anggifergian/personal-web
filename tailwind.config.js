/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class'],
  theme: {
    extend: {},
    colors: {
      blue: colors.blue,
      gray: colors.gray,
      slate: colors.slate,
      white: colors.white,
    }
  },
  plugins: [],
}
