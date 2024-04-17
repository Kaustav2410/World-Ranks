/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: 
    {
      colors: {
      'light-green': '#BEE3CC',
      'white': '#D2D5DA',
      'light-gray': '#6C727F',
      'light-blue': '#4E80EE',
      'light-black': '#282B30', 
      'blackish': '#1B1D1F',
    },},
    fontFamily:{
      Vietnam_Pro:["Be Vietnam Pro"]
    },fontSize: {
      ss:['11px','14px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'max-xl': {'max': '1279px'},
      'min-xl': {'min': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'max-lg': {'max': '1023px'},
      'min-lg': {'min': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
  
    }
  },
  plugins: [],
};
