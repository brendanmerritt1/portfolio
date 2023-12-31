/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      "3xl": { max: "1919px" },
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "428px" },
      xxs: { max: "320px" },
    },
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
        fadeInRight: {
          "0%": { transform: "translateX(1000px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeOutRight: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(1000px)", opacity: "0" },
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
        "show-navbar":
          "fadeInRight 0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)",
        "hide-navbar":
          "fadeOutRight 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
      },
      lineHeight: {
        12: "3rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
