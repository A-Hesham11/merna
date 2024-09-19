/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainLight: "#F8F5F0",
        mainDark: "#1B191A",
        mainColor: "#983F41",
      },
      fontFamily: {
        sans: ['"Roboto Serif"', "serif"],
        Neue: ['"Neue June"', "sans-serif"],
        whisper: ["Whisper", "sans-serif"],
      },
    },
  },
  plugins: [],
};
