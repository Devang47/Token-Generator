const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      blue_1: "#EDFEFF",
      blue_2: "#98C1D9",
      blue_3: "#3D5A80",
      input_bg: "#C7E6E7",
      dark: "#293241",
    },
  },
  variants: {
    extend: {
      scale: ["hover", "focus", "active"],
    },
  },
  plugins: [],
};
