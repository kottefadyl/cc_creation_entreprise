/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '3xl': {'max':'2561px','min': '1873px'},
      // => @media (max-width: 2561px) { ... }
      
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '771px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      gridTemplateColumns: {
        '3-cols': 'repeat(3, minmax(0, 1fr))',
      },
      zIndex: {
        '1':'1',
        '2': '2',
      },
      width: {
        '130': '35rem',
      },
    },
  },
  plugins: [],
}