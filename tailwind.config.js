/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        blanc:'#F8F5F0',
        noir:'#191919',
      },
    },

    fontFamily: {
      paprika: ['paprika','sans-serif'],
    },
  },
  plugins: [],
}
