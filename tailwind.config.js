/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:"#171C45"
      },
      fontFamily:{
        roboto:['Roboto', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}

