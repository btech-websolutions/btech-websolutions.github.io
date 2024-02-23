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
          bg: "#191919",
          icons: "#A7A7A7",
          menubg: "#363636",
          menutext: "#CCCCCC",
        },

        light: {
          solidHeading: "#42446E",
          p: "#666666",
          bg: "#ffffff",
          icons: "#191919",
          menubg: "#181818",
          menutext: "#A7A7A7",
        },
      },
    },
  },
  plugins: [],
};
