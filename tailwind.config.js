/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Spectral: ['Spectral', 'serif'],
        Neuton: ['Neuton', 'serif'],
        Inconsolata: ['Inconsolata', 'serif'], 
        Poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif']

      }
    },
    colors: {
      'minty-green': '#e5f4e0', 
      'minty-green-plus': '#c6e0be',
      'some-kind-of-purple':  '#38001e', 
      'baby-rose': '#ffe3ed', 
      's-blue': '#4709E3',
      's-blue-1': '#0891A1',
      's-orange': '#ED6500', 
      's-orange-1': '#A14400', 
      's-rose-1': '#F8E1E1'

    }
  },
  plugins: [],
}
