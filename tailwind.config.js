/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html',
  './assets/**/*.{js,jsx,ts,tsx,vue}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary': '#c4bd86',
    },
  },
  plugins: [],
}
}