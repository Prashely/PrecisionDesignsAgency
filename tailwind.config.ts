import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        primary: "#0a1d37",
        accent: "#bc9c22",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      helvetica: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
