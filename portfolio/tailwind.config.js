/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1f1f1f",
        "light-gray": "#999999",
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
  darkMode: "class",
};
