// Dark Mode utility functions
export const handleDark = (dark, setDark) => {
  setDark(!dark);
  dark
    ? document.body.classList.remove("dark")
    : document.body.classList.add("dark");
};

export const colors = (hover, dark, type) => {
  if (type == "pill-button" || type == "rect-button") {
    if (!dark) {
      return type + "-hover";
    } else {
      return type + "-hover-dark";
    }
  } else {
    if (hover && !dark) {
      return type + "-dark";
    } else if (hover && dark) {
      return type + "-light";
    } else if (!hover && !dark) {
      return type + "-light";
    } else {
      return type + "-dark";
    }
  }
};