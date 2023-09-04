import { useRef, useLayoutEffect } from "react";
import Earth from "./Earth";

export default function AboutHeroContent() {
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

  return (
    <div className="flex h-screen items-center pl-[15%] xl:pl-[8%] md:justify-center md:p-0 md:pt-[25rem] xs:pt-[15rem]">
      <div ref={main} id="hero" className="flex flex-col">
        <span
          className={`hero-element w-fit text-3xl font-light text-lightest-gray dark:text-lighter-gray 3xl:text-2xl 
                      xl:text-[2vw] lg:text-[2.75vw] md:text-[3.5vw] sm:text-[5vw] xs:text-[5.5vw]`}
        >
          ABOUT
        </span>
        <span
          className={`hero-element w-fit text-6xl font-medium text-lighter-gray dark:text-lightest-gray 3xl:text-5xl 
                      xl:text-[3.5vw] lg:text-[4.25vw] md:text-[5.5vw] sm:text-[7vw] xs:text-[7.5vw]`}
        >
          Brendan Merritt
        </span>
        <Earth />
      </div>
    </div>
  );
}
