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
    <div className="flex h-screen items-center pl-[12%]">
      <div ref={main} id="hero" className="flex flex-col">
        <span
          style={{ wordSpacing: "5px" }}
          className="hero-element w-fit text-3xl font-light text-lightest-gray dark:text-lighter-gray"
        >
          {props.subtitle}
        </span>
        <span className="hero-element w-fit text-6xl font-medium text-lighter-gray dark:text-lightest-gray">
          {props.title}
        </span>
      </div>
    </div>
  );
}
