/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#3b3b3b",
        "darker-gray": "#1f1f1f",
        "light-gray": "#555555",
        "lighter-gray": "#858585",
        "lightest-gray": "#999999",
        "medium-gray": "#5a5a5a",
        "off-white": "#dadada",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(-180deg)" },
        },
        rotation2: {
          "0%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(0)" },
        },
        rotationArrowCC: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(90deg)" },
        },
        rotationArrowC: {
          "0%": { transform: "rotate(90deg)" },
          "100%": { transform: "rotate(0)" },
        },
        fadeInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "spin-dark": "0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards rotation",
        "spin-light": "0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards rotation2",
        "rotate-arrow-CC":
          "0.4s cubic-bezier(0, 0, 0.2, 1) forwards rotationArrowCC",
        "rotate-arrow-C":
          "0.4s cubic-bezier(0, 0, 0.2, 1) forwards rotationArrowC",
        "show-arrow":
          "fadeInLeft 0.4s cubic-bezier(0.550, 0.055, 0.675, 0.190)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
