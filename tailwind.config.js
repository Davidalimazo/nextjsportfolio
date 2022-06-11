module.exports = {
  mode:'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:['Montserrat', 'sans-serif']
    }
  },
    variants:{ 
      extend: {}
  },
  
  plugins: [],
}
