/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBackground: '#161616',
        primaryColor: '#eaff96',
        lightGray: '#A3A3A3',
      },
    },
    fontFamily:{
      greatVibes: ['Great Vibes'],
    },
    
    
  },
  plugins: [],
}

