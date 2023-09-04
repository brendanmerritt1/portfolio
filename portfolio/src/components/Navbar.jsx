import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LightDarkMode } from "../assets/DarkLightMode.svg";
import { ReactComponent as Send } from "../assets/Send.svg";
import { ReactComponent as MenuBars } from "../assets/MenuBars.svg";
import { ReactComponent as XCircle } from "../assets/XCircle.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as LinkedIn } from "../assets/LinkedIn.svg";
import { handleDark } from "../utils/DarkModeUtils";

export default function Navbar(props) {
  const [buttonHover, setButtonHover] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(window.innerWidth <= 1024);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(null);

  const updateMedia = () => {
    setMobileNavbar(window.innerWidth <= 1024);
    if (window.innerWidth > 1024 && mobileNavbarOpen) {
      setMobileNavbarOpen(false);
    }
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

  return (
    <div className="fixed top-0 z-20 flex h-20 w-full pl-8 xxs:pl-4">
      <div className="flex grow items-center text-4xl tracking-wide text-dark-gray dark:text-lightest-gray md:text-[2.5rem] sm:text-[2rem] xs:text-[1.75rem] xxs:text-2xl">
        <Link to={"/"}>
          <span
            id="underline"
            className="cursor-pointer after:bg-light-gray dark:after:bg-lightest-gray"
          >
            <span className="font-semibold">br</span>
            <span>merritt</span>
          </span>
        </Link>
      </div>
      <div className="flex w-[30rem] items-center justify-around text-xl font-normal tracking-wider lg:w-72 md:w-60 sm:w-52 xxs:w-36">
        <button
          id={`${props.dark ? "dark" : "light"}`}
          className="h-8 w-24 cursor-pointer md:h-9 md:w-28 sm:h-8 sm:w-24 xxs:h-6 xxs:w-20"
          onClick={() => handleDark(props.dark, props.setDark)}
        >
          <div id="hd">
            <LightDarkMode />
          </div>
        </button>
        {!mobileNavbar && (
          <Link to={"/about"}>
            <span
              id="underline"
              className="cursor-pointer font-light text-light-gray after:bg-light-gray dark:font-normal dark:text-lightest-gray dark:after:bg-lightest-gray"
            >
              About
            </span>
          </Link>
        )}
        {!mobileNavbar && (
          <Link to={"mailto:brendanmerritt1@gmail.com"}>
            <button
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              onClick={() =>
                (window.location.href = "mailto:brendanmerritt1@gmail.com")
              }
              id={props.colors(buttonHover, props.dark, "pill-button")}
              className="h-10 w-40 rounded-full bg-light-gray text-xl font-bold text-off-white dark:bg-lightest-gray dark:text-medium-gray"
            >
              <span className="flex items-center justify-evenly">
                Let's Talk
                <Send
                  id={props.colors(buttonHover, props.dark, "send")}
                  className="h-6"
                />
              </span>
            </button>
          </Link>
        )}
        {mobileNavbar && (
          <button
            id={`${props.dark ? "icon-dark" : "icon-light"}`}
            onClick={() => setMobileNavbarOpen(true)}
          >
            <MenuBars className="h-10 md:h-12 sm:h-10 xxs:h-7" />
          </button>
        )}
      </div>
      <div
        className={`${
          mobileNavbarOpen != null &&
          (mobileNavbarOpen ? "animate-show-navbar" : "animate-hide-navbar")
        } ${
          mobileNavbarOpen == null && "hidden"
        } absolute right-0 h-screen w-[30%] rounded-l-lg bg-lighter-gray p-5 dark:bg-dark-gray md:w-[40%] xs:w-[50%]`}
      >
        <div className="mb-32 flex justify-end xxs:mb-12">
          <button
            id={`${props.dark ? "icon-dark" : "icon-light"}`}
            onClick={() => setMobileNavbarOpen(false)}
          >
            <XCircle className="h-[3.9vw] md:h-[5.5vw] xs:h-[8vw]" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-24 xxs:gap-20">
          <Link to={"/about"}>
            <span className="text-[3.5vw] font-semibold text-light-gray dark:font-normal dark:text-off-white md:text-[5vw] xs:text-[8vw]">
              About Me
            </span>
          </Link>
          <Link to={"mailto:brendanmerritt1@gmail.com"}>
            <button className="h-[6vw] w-[24vw] rounded-full bg-light-gray text-[2.5vw] font-bold text-off-white dark:bg-lightest-gray dark:text-medium-gray md:h-[8vw] md:w-[32vw] md:text-[3.5vw] xs:h-[10vw] xs:w-[40vw] xs:text-[5vw]">
              <span className="flex items-center justify-evenly">
                Let's Talk
                <Send
                  id={props.colors(buttonHover, props.dark, "send")}
                  className="h-[2.75vw] md:h-[3.5vw] xs:h-[4.5vw]"
                />
              </span>
            </button>
          </Link>
          <div className="flex gap-14 sm:gap-12">
            <a
              href="https://github.com/brendanmerritt1"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                id={`${props.dark ? "icon-dark" : "icon-light"}`}
                className="h-[6vw] md:h-[7vw] xs:h-[10vw]"
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
                className="h-[6vw] md:h-[7vw] xs:h-[10vw]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
