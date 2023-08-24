import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";

export default function HomepageProject(props) {
  const [project, setProject] = useState(false);

  return (
    <Link to={props.url} className="w-full">
      <div
        onMouseEnter={() => setProject(true)}
        onMouseLeave={() => setProject(false)}
        className="flex w-full cursor-pointer justify-center gap-24 pl-60 2xl:gap-[4vw] xl:pl-48"
      >
        <div className="video-container max-w-3xl 2xl:max-w-[37.5vw] xl:max-w-[40vw]">
          <video muted loop playsInline className="rounded-xl">
            <source src={props.source.webm} type="video/webm" />
            <source src={props.source.mp4} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-grow flex-col justify-center gap-2">
          <span className="text-2xl font-normal text-lighter-gray 2xl:text-[1.3vw] 2xl:leading-[2.2vw] xl:text-[1.4vw]">
            {props.subtitle}
          </span>
          <span className="flex items-center gap-7 text-4xl font-bold leading-12 text-dark-gray dark:text-lightest-gray 2xl:text-[1.95vw] 2xl:leading-[2.3vw] xl:text-[1.8vw] xl:leading-[2.2vw]">
            {props.title}
            {project ? (
              <Arrow
                id={`${
                  !props.darkMode.dark ? "arrow-dark" : "arrow-light-gray"
                }`}
                className="h-9 animate-show-arrow 2xl:h-8 xl:h-7"
              />
            ) : (
              <Arrow
                id={`${
                  !props.darkMode.dark ? "arrow-bg-light" : "arrow-bg-dark"
                }`}
                className="h-9 2xl:h-8 xl:h-7"
              />
            )}
          </span>
        </div>
      </div>
    </Link>
  );
}
