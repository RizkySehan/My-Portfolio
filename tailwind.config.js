/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
      backgroundColor: {
        glassmorph: "rgba(255, 255, 255, 0.1)",
      },
      colors: {
        primary: "rgb(20 184 166)",
        altPrimary: "rgb(45 212 191)",
        secondary: "#0e1b31",
        altSecondary: "#132347",
        light: "#9d9d9d",
        altLight: "#a9afc3",
      },
    },
  },
  plugins: [],
};
