/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
              colors: {
                principal: '#2E1012',
                secundaria: '#F3CC4D' 
              },
              fontFamily:{
              font: ['Indie Flower', 'cursive']
              }
    },
  },
  plugins: [],
}

