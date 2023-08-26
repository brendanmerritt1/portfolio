import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";

export default function HomepageProject(props) {
  const [project, setProject] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1024);
    if (window.innerWidth <= 1024) {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <Link to={props.url} className="w-full">
      <div
        onMouseEnter={() => setProject(true)}
        onMouseLeave={() => setProject(false)}
        className="flex w-full cursor-pointer pl-[18vw] lg:p-0 lg:justify-center"
      >
        <div className="flex gap-24 2xl:gap-[4vw] lg:flex-col lg:px-10">
          <div className="video-container max-w-3xl 3xl:max-w-[40vw] 2xl:max-w-[37.5vw] xl:max-w-[40vw] lg:max-w-[50vw]">
            <video muted loop playsInline className="rounded-xl">
              <source src={props.source.webm} type="video/webm" />
              <source src={props.source.mp4} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-grow flex-col justify-center gap-2 lg:w-fit lg:flex-grow-0">
            <span className="text-2xl font-normal text-lighter-gray 3xl:text-[1.4vw] 2xl:text-[1.3vw] 2xl:leading-[2.2vw] xl:text-[1.4vw] lg:text-[2vw]">
              {props.subtitle}
            </span>
            <span className="flex items-center gap-7 text-4xl font-bold leading-12 text-dark-gray dark:text-lightest-gray 3xl:text-[1.7vw] 2xl:text-[1.95vw] 2xl:leading-[2.3vw] xl:text-[1.8vw] xl:leading-[2.2vw] lg:text-[3vw]">
              {props.title}
              {isDesktop &&
                (project ? (
                  <Arrow
                    id={`${
                      !props.darkMode.dark ? "arrow-dark" : "arrow-light-gray"
                    }`}
                    className="h-9 animate-show-arrow 3xl:h-8 2xl:h-8 xl:h-7"
                  />
                ) : (
                  <Arrow
                    id={`${
                      !props.darkMode.dark ? "arrow-bg-light" : "arrow-bg-dark"
                    }`}
                    className="h-9 3xl:h-8 2xl:h-8 xl:h-7"
                  />
                ))}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
