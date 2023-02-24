/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#5A6275',
        'headline': '#fffffe',
        'paragraph': '#abd1c6',
        'button': '#f9bc60',
        'button-text': '#001e1d'
      },
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif']
      }
    },
  },
  plugins: [],
}
