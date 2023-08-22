import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import Mountain from "./Mountain";

export default function HomepageHeroContent(props) {
  // Dark Mode button hover state
  const [buttonHover, setButtonHover] = useState(null);

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

  // Typewriter effect to replace hero text, and blinking cursor effect
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const hero_bold = self.selector(".hero-bold");
      const heroTL = gsap.timeline({
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 2,
      });
      const reverse = gsap
        .to(hero_bold, {
          duration: 1,
          delay: 1,
          text: "web",
        })
        .reverse(0);
      heroTL.add(reverse);
      heroTL.to(hero_bold, {
        duration: 1.5,
        delay: 1,
        text: "software",
      });

      const hero_cursor = self.selector(".hero-cursor");
      gsap.to(hero_cursor, {
        duration: 0.5,
        autoAlpha: 0,
        yoyo: true,
        repeat: -1,
      });
    }, main);

    return () => ctx.revert();
  }, []);

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

  return (
    <div className="flex h-full items-center justify-between pl-[15%] text-lighter-gray dark:text-lightest-gray">
      <div id="hero" className="flex w-fit flex-col" ref={main}>
        <span className="hero-element w-fit text-5xl">
          HI, I'M A
        </span>
        <div>
          <span className="hero-element hero-bold fade w-fit text-7xl font-normal"></span>
          <span className="hero-cursor fade text-7xl font-extralight">|</span>
        </div>
        <span className="hero-element fade w-fit text-[5rem] leading-none tracking-wider">
          developer
        </span>
        <button
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onClick={() => props.lenis.scrollTo(".recent-project")}
          id={props.colors(buttonHover, props.dark, "rect-button")}
          className="hero-element z-10 mt-4 flex w-72 rounded-l-xl rounded-r-xl bg-light-gray py-3 text-2xl font-bold text-white dark:bg-[#aeaeae] dark:text-dark-gray"
        >
          <span className="flex items-center justify-evenly">
            What I've Made
            <div id="ha">
              <Arrow
                id={props.colors(buttonHover, props.dark, "arrow")}
                className="h-7"
              />
            </div>
          </span>
        </button>
        <Mountain />
      </div>
    </div>
  );
}
