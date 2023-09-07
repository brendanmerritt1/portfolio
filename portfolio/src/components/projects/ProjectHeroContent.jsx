import { useRef, useLayoutEffect } from "react";

export default function ProjectHeroContent(props) {
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
    <div className="flex h-screen items-center pl-[12%] 2xl:pl-[8%] lg:pl-[5%] md:justify-center md:p-0 md:pt-[25rem] xs:pt-[15rem]">
      <div
        ref={main}
        id="hero"
        className="flex w-[36vw] flex-col 2xl:w-[44vw] lg:w-[44vw] md:w-fit"
      >
        <span
          style={{ wordSpacing: "5px" }}
          className="hero-element w-fit text-3xl font-light text-lightest-gray dark:text-lighter-gray 3xl:text-2xl xl:text-[2vw] lg:text-[2.5vw] md:text-[3.5vw] sm:text-[5vw]"
        >
          {props.subtitle}
        </span>
        <span className="hero-element w-fit text-6xl font-medium leading-[1.1] text-lighter-gray dark:text-lightest-gray 3xl:text-5xl xl:text-[3.5vw] lg:text-[4.25vw] md:text-[5.5vw] sm:text-[7vw]">
          {props.title}
        </span>
        {props.model}
      </div>
    </div>
  );
}
