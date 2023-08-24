import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LightDarkMode } from "../assets/DarkLightMode.svg";
import { ReactComponent as Send } from "../assets/Send.svg";
import { ReactComponent as MenuBars } from "../assets/MenuBars.svg";
import { ReactComponent as XCircle } from "../assets/XCircle.svg";
import { handleDark } from "../utils/DarkModeUtils";

export default function Navbar(props) {
  const [buttonHover, setButtonHover] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(window.innerWidth <= 1024);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  const updateMedia = () => {
    setMobileNavbar(window.innerWidth <= 1024);
    if (window.innerWidth > 1024) {
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
    <div className="fixed top-0 z-20 flex h-20 w-full pl-8">
      <div className="flex grow items-center text-4xl tracking-wide text-dark-gray dark:text-lightest-gray">
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
      <div className="flex w-[30rem] items-center justify-around text-xl font-normal tracking-wider lg:w-72">
        <button
          id={`${props.dark ? "dark" : "light"}`}
          className="h-8 w-24 cursor-pointer"
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
            <MenuBars className="h-10" />
          </button>
        )}
      </div>
      {mobileNavbarOpen && (
        <div className="absolute right-0 h-screen w-[30%] rounded-l-lg bg-lighter-gray p-5 dark:bg-dark-gray">
          <div className="mb-32 flex justify-end">
            <button
              id={`${props.dark ? "icon-dark" : "icon-light"}`}
              onClick={() => setMobileNavbarOpen(false)}
            >
              <XCircle className="h-[3.9vw]" />
            </button>
          </div>
          <div className="flex flex-col gap-24 items-center">
            <Link to={"/about"}>
              <span className="text-[3.5vw] font-semibold dark:font-normal text-light-gray dark:text-off-white">
                About
              </span>
            </Link>
            <Link to={"mailto:brendanmerritt1@gmail.com"}>
              <button
                className="h-[6vw] w-[24vw] rounded-full bg-light-gray text-[2.5vw] font-bold text-off-white dark:bg-lightest-gray dark:text-medium-gray"
              >
                <span className="flex items-center justify-evenly">
                  Let's Talk
                  <Send
                    id={props.colors(buttonHover, props.dark, "send")}
                    className="h-[2.75vw]"
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
