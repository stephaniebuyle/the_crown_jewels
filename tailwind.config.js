/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Neuton: ['Neuton', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],

      },
      colors: {
        'minty-green': '#e5f4e0', 
        'some-kind-of-purple':  '#38001e', 
        'baby-rose': '#ffe3ed', 
        's-orange': '#ED6500', 
        's-orange-1': '#A14400', 
        's-black': '#010101'
  
      }
    },
   
  },
  plugins: [],
}
