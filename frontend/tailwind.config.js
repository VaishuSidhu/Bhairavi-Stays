/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kaavi: "#813C2B",
        cream: "#FAF9F6",
        gold: "#C89B3C",
        mudbrown: "#5D4037",
        "darkkaavi": "#3E1E16",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
