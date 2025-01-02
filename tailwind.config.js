const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Syne', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
      }
    },
  },

  plugins: [],
}