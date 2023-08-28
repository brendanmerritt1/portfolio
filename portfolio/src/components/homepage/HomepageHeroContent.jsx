import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import Mountain from "./Mountain";
import { useLenis } from "@studio-freight/react-lenis";

export default function HomepageHeroContent(props) {
  // Dark Mode button hover state, mobile state
  const [buttonHover, setButtonHover] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Smooth scroll hook
  const lenis = useLenis();

  // Changing button hover functionality depending on screen size
  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

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
            end: "top+=700px top",
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

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  // Main button arrow animation
  useEffect(() => {
    if (buttonHover !== null && !isMobile) {
      if (buttonHover) {
        document.getElementById("ha").className = "animate-rotate-arrow-CC";
      } else {
        document.getElementById("ha").className = "animate-rotate-arrow-C";
      }
    }
  }, [buttonHover]);

  return (
    <div className="flex h-full items-center justify-between pl-[15%] text-lighter-gray dark:text-lightest-gray xs:pb-[35vw] xxs:pb-16">
      <div id="hero" className="flex w-fit flex-col" ref={main}>
        <span className="hero-element w-fit text-5xl xl:text-[3vw] lg:text-[4.5vw] md:text-[5.5vw] sm:text-[6.5vw] xs:text-[8.5vw]">
          HI, I'M A
        </span>
        <div>
          <span className="hero-element hero-bold fade w-fit text-7xl font-normal xl:text-[4.5vw] lg:text-[6.5vw] md:text-[7.5vw] sm:text-[8.5vw] xs:text-[10.5vw]"></span>
          <span className="hero-cursor fade text-7xl font-extralight xl:text-[4.5vw] lg:text-[6.5vw] md:text-[7.5vw] sm:text-[8.5vw] xs:text-[10.5vw]">
            |
          </span>
        </div>
        <span className="hero-element fade w-fit text-[5rem] leading-none tracking-wider xl:text-[5vw] lg:text-[7vw] md:text-[8vw] sm:text-[9vw] xs:text-[11vw]">
          developer
        </span>
        <button
          onMouseEnter={() => !isMobile && setButtonHover(true)}
          onMouseLeave={() => !isMobile && setButtonHover(false)}
          onClick={() => lenis.scrollTo(".recent-project")}
          id={
            !isMobile
              ? props.colors(buttonHover, props.dark, "rect-button")
              : "rect-button"
          }
          className="hero-element z-10 mt-4 flex w-72 rounded-xl bg-light-gray py-3 text-2xl font-bold text-white dark:bg-[#aeaeae] dark:text-dark-gray xl:w-52 xl:text-xl md:w-60 sm:w-[40vw] sm:text-[3.5vw] xs:w-[45vw] xs:text-[3.75vw] xxs:h-10 xxs:py-0"
        >
          <span className="flex items-center justify-evenly">
            What I've Made
            <div id="ha">
              <Arrow
                id={props.colors(buttonHover, props.dark, "arrow")}
                className="h-7 xl:h-6 sm:h-[4vw] xs:h-[4.5vw]"
              />
            </div>
          </span>
        </button>
        <Mountain />
      </div>
    </div>
  );
}
