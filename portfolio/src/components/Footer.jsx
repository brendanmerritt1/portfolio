import { ReactComponent as Heart } from "../assets/Heart.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as LinkedIn } from "../assets/LinkedIn.svg";
import { useLayoutEffect, useRef } from "react";

export default function Footer(props) {
  const main = useRef();

  // ScrollTrigger footer opacity animation
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const footer = self.selector("#footer");
      const footer_element = self.selector(".footer-element");
      footer_element.forEach((ele) => {
        gsap.to(ele, {
          scrollTrigger: {
            trigger: footer,
            start: "5% top",
            end: "30% top",
            scrub: true,
          },
          autoAlpha: 1,
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="footer"
      className="fixed bottom-0 flex h-16 w-full items-center justify-between px-7"
      ref={main}
    >
      <span className="footer-element invisible flex text-xl font-normal text-dark-gray dark:text-lightest-gray">
        Made with
        <Heart
          id={`${props.dark ? "icon-dark" : "icon-light"}`}
          className="h-6 px-2"
        />
        in NC
      </span>
      <div className="footer-element invisible flex gap-9">
        <a
          href="https://github.com/brendanmerritt1"
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            id={`${props.dark ? "icon-dark" : "icon-light"}`}
            className="h-9 cursor-pointer"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/brendanmerritt1/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn
            id={`${props.dark ? "icon-dark" : "icon-light"}`}
            className="h-9 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
