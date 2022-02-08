const { color } = require("@chakra-ui/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl-max': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl-max': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg-max': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md-max': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm-max': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      height: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '1/12': '8,3333%'
      },
      width: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '25/100': '25%',
      },
      fontFamily: {
        poppins: ["Poppins"],
        bahnschrift: ['Bahnschrift'],
        Montserrat: ['Montserrat'],
      },
      fontWeight: {
        'extrablack' : 'bolder'
      },
      colors: {
        'hijau' : '#38E569',
        'blues' : '#0CA1F5'
      }
    },
  },
  plugins: [],
}