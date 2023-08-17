import { ReactComponent as Heart } from "../assets/Heart.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as LinkedIn } from "../assets/LinkedIn.svg";

export default function Footer(props) {
  return (
    <div className="flex h-16 items-center justify-between px-7 sticky">
      <span className="flex text-xl font-normal text-dark-gray dark:text-lightest-gray">
        Made with
        <Heart
          id={`${props.darkMode.dark ? "icon-dark" : "icon-light"}`}
          className="h-6 px-2"
        />
        in NC
      </span>
      <div className="flex gap-9">
        <a
          href="https://github.com/brendanmerritt1"
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github
            id={`${props.darkMode.dark ? "icon-dark" : "icon-light"}`}
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
            id={`${props.darkMode.dark ? "icon-dark" : "icon-light"}`}
            className="h-9 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}
