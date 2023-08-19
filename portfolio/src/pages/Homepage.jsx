import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mountain from "../components/Mountain";
import Project from "../components/Project";
import { ReactComponent as Arrow } from "../assets/Arrow.svg";
import { colors } from "../utils/DarkModeUtils";
import Lenis from "@studio-freight/lenis";

// TODO:
// Clone nonogram game and create a new properly resized video
// Clone simple shell and create a new properly resized video

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Homepage() {
  // Dark Mode state
  const [dark, setDark] = useState(null);
  const [buttonHover, setButtonHover] = useState(null);

  // Smooth Scroll setup
  const lenis = new Lenis({
    lerp: 0.1,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

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
            end: "800px top",
            scrub: true,
          },
          opacity: 0,
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  // ScrollTrigger video play
  useLayoutEffect(() => {
    const videos = gsap.utils.toArray(".video-container");
    const ctx = gsap.context(() => {
      videos.forEach((videoDiv) => {
        let video = videoDiv.querySelector("video");
        ScrollTrigger.create({
          trigger: video,
          start: "top bottom",
          end: "top top",
          onEnter: () => video.play(),
          onEnterBack: () => video.play(),
          onLeave: () => video.pause(),
          onLeaveBack: () => video.pause(),
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
              onClick={() => lenis.scrollTo(".recent-project")}
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
      <div className="recent-project relative flex h-full flex-col items-center gap-52 py-64">
        <Project
          darkMode={dark}
          source={{
            mp4: "/solar-system-wallpaper-video.mp4",
            webm: "/solar-system-wallpaper-video.mp4",
          }}
          subtitle={"SOFTWARE DEVELOPMENT"}
          title={"Animated Wallpaper Shader"}
        />
        <Project
          darkMode={dark}
          source={{
            mp4: "/cloudburst-video.mp4",
            webm: "/cloudburst-video.webm",
          }}
          subtitle={"WEB DEVELOPMENT"}
          title={"Cloudburst Lawn Sprinkler Systems"}
        />
        <Project
          darkMode={dark}
          source={{
            mp4: "/mona-portfolio-video.mp4",
            webm: "/mona-portfolio-video.webm",
          }}
          subtitle={"WEB DEVELOPMENT"}
          title={"Mona Dougani's Portfolio"}
        />
        <Project
          darkMode={dark}
          source={{ mp4: "/covid-19-video.mp4", webm: "/covid-19-video.webm" }}
          subtitle={"WEB DEVELOPMENT"}
          title={"COVID-19 Dashboard"}
        />
        <Project
          darkMode={dark}
          source={{
            mp4: "/ip-tracker-video.mp4",
            webm: "/ip-tracker-video.webm",
          }}
          subtitle={"WEB DEVELOPMENT"}
          title={"IP Tracker Dashboard"}
        />
        <Project
          darkMode={dark}
          source={{ mp4: "/nonogram-video.mp4", webm: "/nonogram-video.webm" }}
          subtitle={"SOFTWARE DEVELOPMENT"}
          title={"Nonogram Game"}
        />
      </div>
    </div>
  );
}
