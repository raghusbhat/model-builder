/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          a0: "#c300eb",
          a10: "#cc3eee",
          a20: "#d55df1",
          a30: "#dd77f3",
          a40: "#e58ff6",
          a50: "#eba6f8",
        },
        surface: {
          a0: "#000000",
          a10: "#1e1e1e",
          a20: "#353535",
          a30: "#4e4e4e",
          a40: "#696969",
          a50: "#858585",
        },
        "surface-mixed": {
          a0: "#190c1b",
          a10: "#2d2330",
          a20: "#443b46",
          a30: "#5c535e",
          a40: "#756e77",
          a50: "#8f8990",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
