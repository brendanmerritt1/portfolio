import { useState } from "react";
import { ReactComponent as Arrow } from "../assets/Arrow.svg";

export default function Project(props) {
  // Project hover state
  const [project, setProject] = useState(false);

  return (
    <div
      onMouseEnter={() => setProject(true)}
      onMouseLeave={() => setProject(false)}
      className={`flex w-full cursor-pointer justify-center gap-24 pl-60`}
    >
      <div className="video-container max-w-3xl">
        <video muted loop playsInline className="rounded-xl">
          <source src={props.source.webm} type="video/webm" />
          <source src={props.source.mp4} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col justify-center gap-2 flex-grow">
        <span className="text-2xl font-normal text-lighter-gray">
          {props.subtitle}
        </span>
        <span className="flex items-center gap-7 text-4xl font-bold text-dark-gray dark:text-lightest-gray leading-12">
          {props.title}
          {project ? (
            <Arrow
              id={`${!props.darkMode ? "arrow-dark" : "arrow-light-gray"}`}
              className="h-9 animate-show-arrow"
            />
          ) : (
            <Arrow
              id={`${!props.darkMode ? "arrow-bg-light" : "arrow-bg-dark"}`}
              className="h-9"
            />
          )}
        </span>
      </div>
    </div>
  );
}
