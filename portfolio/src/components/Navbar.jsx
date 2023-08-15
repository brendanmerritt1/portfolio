import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LightDarkMode } from "../assets/DarkLightMode.svg";
import { ReactComponent as Send } from "../assets/Send.svg";

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
    <div className="flex h-20 pl-8">
      <div className="dark:text-lightest-gray flex grow items-center text-4xl tracking-wide text-dark-gray">
        <Link to={"/"}>
          <span
            id="underline"
            className="dark:after:bg-lightest-gray cursor-pointer after:bg-light-gray"
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
          onClick={() => props.darkMode.handleDark(props.darkMode.dark)}
        >
          <div id="hd">
            <LightDarkMode />
          </div>
        </button>
        <span
          id="underline"
          className="dark:text-lightest-gray dark:after:bg-lightest-gray cursor-pointer font-light text-light-gray after:bg-light-gray dark:font-normal"
        >
          About
        </span>
        <button
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          id={props.colors(buttonHover, props.darkMode.dark, "pill-button")}
          className="dark:bg-lightest-gray h-10 w-40 rounded-full bg-light-gray text-xl font-bold text-off-white dark:text-medium-gray"
        >
          <span className="flex items-center justify-evenly">
            Let's Talk
            <Send
              id={props.colors(buttonHover, props.darkMode.dark, "send")}
              className="h-6"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
