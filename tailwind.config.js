const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jite",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
        inter: ["Inter"],
      },
      colors: {
        secondary: "#5CBF90",
        bgDark: "#010101",
        primaryShade: "#557565",
        baseGray: "#3C4254",
        primary: "#282C38",
        title: "#030229",
      },
    },
  },
  plugins: [],
};
