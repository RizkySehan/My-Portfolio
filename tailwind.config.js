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
    },
  },
  plugins: [],
};
