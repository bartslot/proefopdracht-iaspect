/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',
  './public/assets/**/*.{js,jsx,ts,tsx,vue}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Venera500', 'mono-space'],
      },
      colors: {
        'primary': '#c4bd86',
    },
  },
  plugins: [],
}
}