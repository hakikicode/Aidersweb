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
        gray: {
          600: "#6d6d6d",
          900: "#1b1b1b",
          "900_87": "#1b1b1b87",
          "700_3f": "#6666663f",
        },
        white: { A700_87: "#fefefe87", A700_01: "#fefefe", A700: "#ffffff" },
        yellow: { A400: "#e7e013" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        blue_gray: { 800: "#26513a" },
      },
      fontFamily: { ubuntu: "Ubuntu", sofiasans: "Sofia Sans" },
      boxShadow: { bs: "inset -1px 2px  15px 10px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
