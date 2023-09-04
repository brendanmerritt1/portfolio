import { ReactComponent as Heart } from "../assets/Heart.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as LinkedIn } from "../assets/LinkedIn.svg";
import { useLayoutEffect, useRef, useState, useEffect } from "react";

export default function Footer(props) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth <= 768 && window.innerWidth > 640,
  );
  const main = useRef();

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 640);
    setIsTablet(window.innerWidth <= 768 && window.innerWidth > 640);
  };

  useEffect(() => {
    if (props.dark !== null) {
      if (props.dark) {
        document.getElementById("hd").className = "animate-spin-dark";
      } else {
        document.getElementById("hd").className = "animate-spin-light";
      }
    }
  }, [props.dark]);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  // ScrollTrigger footer opacity animation
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      let start, end;
      if (isMobile) {
        start = "bottom-=1000px";
        end = "bottom-=1000px";
      } else if (isTablet) {
        start = "bottom-=1100px";
        end = "bottom-=1100px";
      } else {
        start = "5%";
        end = "50%";
      }
      const footer = self.selector("#footer");
      const footer_element = self.selector(".footer-element");
      footer_element.forEach((ele) => {
        gsap.to(ele, {
          scrollTrigger: {
            trigger: footer,
            start: `${start} top`,
            end: `${end} top`,
            scrub: true,
          },
          autoAlpha: 1,
        });
      });
    }, main);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div
      id="footer"
      className="fixed bottom-0 z-10 flex h-16 w-full items-center justify-between px-7 xxs:px-5"
      ref={main}
    >
      <span className="footer-element invisible flex text-xl font-normal text-dark-gray dark:text-lightest-gray xl:text-base md:text-lg sm:text-sm xxs:text-xs">
        Made with
        <Heart
          id={`${props.dark ? "icon-dark" : "icon-light"}`}
          className="h-6 px-2 xl:h-5 md:h-6 sm:h-4 xxs:h-4"
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
            className="h-9 cursor-pointer xl:h-8 md:h-9 sm:h-7 xxs:h-6"
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
            className="h-9 cursor-pointer xl:h-8 md:h-9 sm:h-7 xxs:h-6"
          />
        </a>
      </div>
    </div>
  );
}
