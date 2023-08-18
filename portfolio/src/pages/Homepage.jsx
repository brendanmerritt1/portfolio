import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mountain from "../components/Mountain";
import { ReactComponent as Arrow } from "../assets/Arrow.svg";
import { colors } from "../utils/DarkModeUtils";
import { inViewProps, picOrVid } from "../utils/IntersectionObs";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Homepage() {
  // Dark Mode state
  const [dark, setDark] = useState(null);
  const [buttonHover, setButtonHover] = useState(null);

  // Project hover states
  const [project1, setProject1] = useState(false);

  // Footer visibility helper function
  const listenToScrollFooter = () => {
    let heightToShow = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShow) {
      !isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Displays picture or video depending on visibility in viewport
  const obs = inViewProps();

  // Main button arrow animation
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
    window.addEventListener("scroll", listenToScrollFooter);
    return () => window.removeEventListener("scroll", listenToScrollFooter);
  }, []);

  // ScrollTrigger hero opacity animation
  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const hero = self.selector("#hero");
      const hero_element = self.selector(".hero-element");
      hero_element.forEach((ele) => {
        gsap.to(ele, {
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "45% top",
            scrub: true,
          },
          opacity: 0,
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex h-full flex-col overflow-y-auto overflow-x-hidden bg-off-white dark:bg-darker-gray">
      <div className="h-screen">
        <Navbar darkMode={{ dark, setDark }} colors={colors} />
        <div className="flex h-full items-center justify-between pl-[15%] text-lighter-gray dark:text-lightest-gray">
          <div id="hero" className="flex w-fit flex-col" ref={main}>
            <span className="hero-element w-fit text-5xl font-light">
              HI, I'M A
            </span>
            <span className="hero-element w-fit text-7xl font-normal">web</span>
            <span className="hero-element w-fit text-[5rem] leading-none tracking-wider">
              developer
            </span>
            <button
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              id={colors(buttonHover, dark, "rect-button")}
              className="hero-element z-10 mt-4 flex w-72 rounded-l-xl rounded-r-xl bg-light-gray py-3 text-2xl font-bold text-white dark:bg-[#aeaeae] dark:text-dark-gray"
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
            <Mountain />
          </div>
        </div>
        <Footer darkMode={dark} />
      </div>
      <div className="relative flex h-screen flex-col items-center pt-64">
        <div
          onMouseEnter={() => setProject1(true)}
          onMouseLeave={() => setProject1(false)}
          className="ml-16 flex w-fit cursor-pointer justify-center gap-24"
        >
          <div ref={obs.ref}>{picOrVid(obs.inView)}</div>
          <div className="flex flex-col justify-center gap-3">
            <span className="text-2xl font-normal text-lighter-gray">
              SOFTWARE DEVELOPMENT
            </span>
            <span className="flex items-center gap-7 text-4xl font-bold text-dark-gray dark:text-lightest-gray">
              Animated Wallpaper Shader
              {project1 ? (
                <Arrow
                  id={`${!dark ? "arrow-dark" : "arrow-light-gray"}`}
                  className="h-9 animate-show-arrow"
                />
              ) : (
                <Arrow
                  id={`${!dark ? "arrow-bg-light" : "arrow-bg-dark"}`}
                  className="h-9"
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
