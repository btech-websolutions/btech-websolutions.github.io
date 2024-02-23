/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          solidHeading: "#CCCCCC",
          p: "#A7A7A7",
          bg: "#ffffff",
          icons: "#A7A7A7",
          gradient: "gradient-light-dark",
        },

        light: {
          solidHeading: "#42446E",
          p: "#181818",
          bg: "#191919",
          icons: "#191919",
        },
      },
    },
  },
  plugins: [],
};
