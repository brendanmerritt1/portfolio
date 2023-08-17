import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mountain from "../components/Mountain";
import { ReactComponent as Arrow } from "../assets/Arrow.svg";

export default function Homepage() {
  // Dark Mode state
  const [dark, setDark] = useState(null);
  const [buttonHover, setButtonHover] = useState(null);

  // Footer visibility state
  const [isVisible, setIsVisible] = useState(false);

  // Dark Mode utility functions
  const handleDark = (bool) => {
    setDark(!bool);
    dark
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  };

  const colors = (hover, dark, type) => {
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

  // Footer visibility helper function
  const listenToScroll = () => {
    let heightToShow = 600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShow) {
      !isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Dark Mode animation render
  useEffect(() => {
    if (buttonHover !== null) {
      if (buttonHover) {
        document.getElementById("ha").className = "animate-rotate-arrow-CC";
      } else {
        document.getElementById("ha").className = "animate-rotate-arrow-C";
      }
    }
  }, [buttonHover]);

  // Footer visibility on scroll render
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="flex h-screen flex-col overflow-y-auto overflow-x-hidden bg-off-white dark:bg-darker-gray">
      <Navbar darkMode={{ dark, handleDark }} colors={colors} />
      <div className="flex h-full items-center justify-between pl-[15%] text-lighter-gray dark:text-lightest-gray">
        <div className="flex w-fit flex-col">
          <span className="w-fit text-5xl font-light">HI, I'M A</span>
          <span className="w-fit text-7xl font-normal">web</span>
          <span className="w-fit text-[5rem] leading-none tracking-wider">
            developer
          </span>
          <button
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            id={colors(buttonHover, dark, "rect-button")}
            className="z-10 mt-4 flex w-72 rounded-l-xl rounded-r-xl bg-light-gray py-3 text-2xl font-bold text-white dark:bg-[#aeaeae] dark:text-dark-gray"
          >
            <span className="flex items-center justify-evenly">
              What I've Made
              <div id="ha">
                <Arrow
                  id={colors(buttonHover, dark, "arrow")}
                  className="h-7"
                />
              </div>
            </span>
          </button>
        </div>
        <Mountain />
      </div>
      {isVisible && <Footer darkMode={{ dark, handleDark }} />}
    </div>
  );
}
