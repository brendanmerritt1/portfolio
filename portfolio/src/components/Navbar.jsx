import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LightDarkMode } from "../assets/DarkLightMode.svg";
import { ReactComponent as Send } from "../assets/Send.svg";
import { handleDark } from "../utils/DarkModeUtils";

export default function Navbar(props) {
  const [buttonHover, setButtonHover] = useState(false);

  useEffect(() => {
    if (props.darkMode.dark !== null) {
      if (props.darkMode.dark) {
        document.getElementById("hd").className = "animate-spin-dark";
      } else {
        document.getElementById("hd").className = "animate-spin-light";
      }
    }
  }, [props.darkMode.dark]);

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
      <div className="flex w-1/4 items-center justify-evenly text-xl font-normal tracking-wider">
        <button
          id={`${props.darkMode.dark ? "dark" : "light"}`}
          className="h-8 w-24 cursor-pointer"
          onClick={() =>
            handleDark(props.darkMode.dark, props.darkMode.setDark)
          }
        >
          <div id="hd">
            <LightDarkMode />
          </div>
        </button>
        <Link to={"/about"}>
          <span
            id="underline"
            className="cursor-pointer font-light text-light-gray after:bg-light-gray dark:font-normal dark:text-lightest-gray dark:after:bg-lightest-gray"
          >
            About
          </span>
        </Link>
        <Link to={"mailto:brendanmerritt1@gmail.com"}>
          <button
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
            onClick={() =>
              (window.location.href = "mailto:brendanmerritt1@gmail.com")
            }
            id={props.colors(buttonHover, props.darkMode.dark, "pill-button")}
            className="h-10 w-40 rounded-full bg-light-gray text-xl font-bold text-off-white dark:bg-lightest-gray dark:text-medium-gray"
          >
            <span className="flex items-center justify-evenly">
              Let's Talk
              <Send
                id={props.colors(buttonHover, props.darkMode.dark, "send")}
                className="h-6"
              />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
