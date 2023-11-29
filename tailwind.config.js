/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        amber1: "#FDFAF0FF",
        amber2: "#F7F7F7FF",
        green1: "#EEFDF3FF",
        red1: "#FDF2F2FF",
        amberText: "#000000FF",
        greenText: "#117B34FF",
        redText: "#DE3B40FF",
        lightGrayText: "D9D9D9",
      },
    },
  },
  plugins: [],
};
