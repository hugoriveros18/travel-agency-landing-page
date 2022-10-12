/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('./assets/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('./assets/sanFranciscoDesktop.jpg')",
        'yosemite': "url('./assets/yosemite.jpg')",
        'LA': "url('./assets/LA.jpg')",
        'seattle': "url('./assets/seattle.jpg')",
        'newYork': "url('./assets/new_york.jpg')",
        'norway': "url('./assets/norway.jpg')",
        'sydney': "url('./assets/sydney.jpg')",
        'miami': "url('./assets/miami.jpg')",
        'switzerland': "url('./assets/switzerland.jpg')",
        'bali': "url('./assets/bali.jpg')",
        'chicago': "url('./assets/chicago.jpg')",
        'europe': "url('./assets/europe.jpg')",
        'iceland': "url('./assets/iceland.jpg')",
      },
      backgroundColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        'footer': '#FCFBFB',
        'darkTheme': '#1F2937',
        'darkCardSecondary' : '#374151',
        'darkCardNotSecondary' : '#1F2937'
      },
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
        'footer': '#CCCCCC',
        'FAQDarkMode' : '#D1D5DB'
      },
      borderColor: {
        'primary': '#CC2D4A'
      },
      colors: {
        'footer': '#CCCCCC',
        'primary': '#CC2D4A'
      },
      grayscale: {
        50: '50%'
      },
    },
  },
  plugins: [],
}

