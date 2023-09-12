import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";

export default function HomepageProject(props) {
  const [project, setProject] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  // ScrollTrigger video play
  const main = useRef(null);
  useLayoutEffect(() => {
    const videos = gsap.utils.toArray(".video-container");
    const ctx = gsap.context(() => {
      videos.forEach((videoDiv) => {
        let video = videoDiv.querySelector("video");
        ScrollTrigger.create({
          trigger: video,
          start: "center+=50 bottom",
          end: "center+=50 top",
          onEnter: () => video.play(),
          onEnterBack: () => video.play(),
          onLeave: () => video.pause(),
          onLeaveBack: () => video.pause(),
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

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
        className="flex w-full cursor-pointer pl-[15vw] 2xl:pl-[18vw] lg:justify-center lg:p-0"
      >
        <div className="flex gap-[6vw] 2xl:gap-[4vw] lg:flex-col lg:px-10 sm:max-w-[83vw] xs:max-w-[90vw]">
          <div className="video-container max-w-3xl 3xl:max-w-[40vw] 2xl:max-w-[37.5vw] xl:max-w-[40vw] lg:max-w-[50vw] md:max-w-[70vw]">
            <video muted loop playsInline className="rounded-xl" ref={main}>
              <source src={props.source.webm} type="video/webm" />
              <source src={props.source.mp4} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-grow flex-col justify-center gap-2 lg:w-fit lg:flex-grow-0">
            <span className="text-2xl font-normal text-lighter-gray 3xl:text-[1.4vw] 2xl:text-[1.3vw] 2xl:leading-[2.2vw] xl:text-[1.4vw] lg:text-[2vw] md:text-[3vw] sm:text-[3.5vw]">
              {props.subtitle}
            </span>
            <span
              className={`flex items-center gap-7 text-4xl font-bold leading-12 text-dark-gray dark:text-lightest-gray 3xl:text-[1.7vw] 
              2xl:text-[1.95vw] 2xl:leading-[2.3vw] xl:text-[1.8vw] xl:leading-[2.2vw] lg:text-[3vw] md:text-[4vw] md:leading-[5vw] sm:text-[4.5vw] sm:leading-[6vw]`}
            >
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
