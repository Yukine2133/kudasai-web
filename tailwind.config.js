/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#d71950",
        grey: "#3d3c3d",
        purple: "#a851ff",
        pink: "#da5ea3",
      },
    },
  },
  plugins: [],
};
