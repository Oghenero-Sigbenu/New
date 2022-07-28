/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",
],
  theme: {
    colors: {
      'green': "#1a6616",
      "yellow": "#ffb700",
      'dark-red': '#2D020B',
      'white':"#fff",
      "red": "#ff0a00",
       "black": "#000000"
      
     },
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        spinnaker: ["Spinnaker", "sans-serif"]
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")]
}