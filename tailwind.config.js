module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: [
    './*.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "full-minus-2rm": "calc(100% - 2rem)",
        "full-minus-5rm": "calc(100% - 5rem)",
        "screen-minus-6rm": "calc(100vh - 6rem)",
        "screen-minus-8rm": "calc(100vh - 8rem)"
      },
      colors: {
        "neutral-165": "rgb(165, 165, 165)",
        "neutral-239": "rgb(239, 239, 239)",
        "blue-236": "rgb(67, 174, 236)",
      }
    },
    fontFamily: {
      vazir: ["Vazir"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}