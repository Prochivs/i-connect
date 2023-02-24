/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'button':'#a513e2',
        'purple':'#e7c2f6',
        'footer':'#210033'
      },
       fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'poppins': ['"Poppins"', 'serif'] ,
      'neon': ['"Tilt Neon"', 'cursive']// Ensure fonts with spaces have " " surrounding it.
    },
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
  },
  plugins: [],
}
