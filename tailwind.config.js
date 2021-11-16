module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white:"#FFF",
      black: "#000000",
      black_blue:"#1B262C",
      blue:"#0F4C75",
      light_blue:"#3282B8",
      gray_blue:"#BBE1FA"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
