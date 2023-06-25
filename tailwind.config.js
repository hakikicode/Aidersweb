module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 600: "#6d6d6d", 900: "#1b1b1b", "700_3f": "#6666663f" },
        blue_gray: { 100: "#d9d9d9", 800: "#26513a" },
        amber: { 500: "#fbbc05" },
        blue: { A400: "#1877f2", A200: "#4285f4" },
        red: { 500: "#ea4335" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        green: { 600: "#34a853" },
        yellow: { A400: "#e7e013" },
        white: { A700_01: "#fefefe", A700: "#ffffff" },
        indigo: { 900: "#19265c" },
      },
      fontFamily: { ubuntu: "Ubuntu", sofiasans: "Sofia Sans" },
      boxShadow: {
        bs: "1px 1px  11px 2px #0000003f",
        bs2: "1px 1px  24px -3px #0000003f",
        bs1: "inset -1px 2px  15px 10px #0000003f",
      },
      textShadow: { ts: "1px 1px  24px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
