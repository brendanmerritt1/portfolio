import { Link } from "react-router-dom";
import { ReactComponent as LightDarkMode } from "../assets/DarkLightMode.svg";
import { ReactComponent as Send } from "../assets/Send.svg";

export default function Navbar(props) {
  return (
    <div className="flex h-20 pl-8">
      <div className="flex grow items-center text-4xl tracking-wide text-dark-gray dark:text-lighter-gray">
        <Link to={"/"}>
          <span
            id="underline"
            className="cursor-pointer after:bg-light-gray dark:after:bg-lighter-gray"
          >
            <span className="font-semibold">br</span>
            <span>merritt</span>
          </span>
        </Link>
      </div>
      <div className="flex w-1/4 items-center justify-evenly text-xl font-normal tracking-wider">
        <button
          id={`${props.dark ? "dark" : "light"}`}
          className="h-8 w-24 cursor-pointer"
          onClick={() => props.handleDark()}
        >
          <div
            className={`${
              (props.dark && "animate-spin-dark") || (!props.dark && "animate-spin-light")
            }`}
          >
            <LightDarkMode />
          </div>
        </button>
        <span
          id="underline"
          className="cursor-pointer font-light text-light-gray after:bg-light-gray dark:font-normal dark:text-lighter-gray dark:after:bg-lighter-gray"
        >
          About
        </span>
        <button className="flex h-10 w-40 items-center justify-evenly rounded-full bg-light-gray text-xl font-bold text-off-white dark:bg-lighter-gray dark:text-medium-gray">
          Let's Talk
          <Send id={`${props.dark ? "send-dark" : "send-light"}`} className="h-6" />
        </button>
      </div>
    </div>
  );
}
