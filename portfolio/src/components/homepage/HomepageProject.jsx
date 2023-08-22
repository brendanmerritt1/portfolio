import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";

export default function HomepageProject(props) {
  const [project, setProject] = useState(false);

  return (
    <Link
      to={props.url}
      className="w-full"
    >
      <div
        onMouseEnter={() => setProject(true)}
        onMouseLeave={() => setProject(false)}
        className="flex w-full cursor-pointer justify-center gap-24 pl-60"
      >
        <div className="video-container max-w-3xl">
          <video muted loop playsInline className="rounded-xl">
            <source src={props.source.webm} type="video/webm" />
            <source src={props.source.mp4} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-grow flex-col justify-center gap-2">
          <span className="text-2xl font-normal text-lighter-gray">
            {props.subtitle}
          </span>
          <span className="flex items-center gap-7 text-4xl font-bold leading-12 text-dark-gray dark:text-lightest-gray">
            {props.title}
            {project ? (
              <Arrow
                id={`${
                  !props.darkMode.dark ? "arrow-dark" : "arrow-light-gray"
                }`}
                className="h-9 animate-show-arrow"
              />
            ) : (
              <Arrow
                id={`${
                  !props.darkMode.dark ? "arrow-bg-light" : "arrow-bg-dark"
                }`}
                className="h-9"
              />
            )}
          </span>
        </div>
      </div>
    </Link>
  );
}
