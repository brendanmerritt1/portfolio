import { useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/ArrowUpRight.svg";

export default function ProjectMainContent(props) {
  const main = useRef(null);

  // ScrollTrigger video play
  useLayoutEffect(() => {
    const videos = gsap.utils.toArray(".video-container");
    const ctx = gsap.context(() => {
      videos.forEach((videoDiv) => {
        let video = videoDiv.querySelector("video");
        ScrollTrigger.create({
          trigger: video,
          start: "center-=50 bottom",
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

  return (
    <div className="flex h-full flex-col items-center gap-28 py-32 lg:pt-24 xs:pt-16">
      <div
        className={`flex h-fit w-fit gap-[8rem] px-[18rem] font-light 3xl:pl-[16rem] 3xl:pr-[10rem] 2xl:gap-[5rem]
                    xl:pl-[13rem] xl:pr-[8rem] lg:gap-[5rem] lg:px-[4rem] md:gap-[3rem] md:px-[3rem] sm:flex-col xs:px-[2.5rem]`}
      >
        <div className="flex flex-col justify-between py-3 sm:flex-row sm:items-center">
          <div
            className={`flex flex-col gap-1 text-3xl text-lighter-gray 3xl:text-2xl 2xl:text-xl xl:text-[2vw] 
                        lg:text-[2.5vw] md:text-[2.75vw] sm:text-[4vw] xs:text-[4.5vw]`}
          >
            {props.project.hashtags.map((hashtag, i) => {
              return (
                <span key={props.project.hashtags.toString() + i}>
                  {hashtag}
                </span>
              );
            })}
          </div>
          <div
            className={`flex flex-col gap-3 text-2xl text-light-gray dark:text-off-white 3xl:text-xl 2xl:text-lg xl:text-[1.75vw]
                        lg:text-[2.25vw] sm:text-[3.75vw] xs:text-[4vw]`}
          >
            {props.project.linkTitles.map((linkTitle, i) => {
              return (
                <Link
                  to={props.project.links[i]}
                  key={props.project.links[i]}
                  id="underline"
                  className="flex w-fit cursor-pointer gap-1 after:bg-light-gray"
                >
                  <span>{linkTitle}</span>
                  <Arrow
                    id={`${props.dark ? "icon-dark" : "icon-light"}`}
                    className="h-9 3xl:h-8 2xl:h-7 xl:h-[2.5vw] lg:h-[3.5vw] sm:h-[6vw] xs:h-[6.5vw]"
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div
          className={`flex flex-col gap-16 text-5xl leading-normal text-darker-gray dark:text-off-white 3xl:text-4xl 3xl:leading-normal 
                      2xl:text-3xl 2xl:leading-relaxed xl:text-[2.75vw] lg:text-[3.5vw] md:text-[3.75vw] sm:text-[5vw] 
                      xs:text-[5.5vw] xs:leading-[1.85]`}
        >
          {props.project.paragraphs.slice(0, 2).map((pg, i) => {
            return <span key={props.project.name + i}>{pg}</span>;
          })}
        </div>
      </div>
      <div className="video-container max-w-[50vw] 3xl:max-w-[40vw] 2xl:max-w-[37.5vw] xl:max-w-[40vw] lg:max-w-[50vw] md:max-w-[70vw]">
        <video muted loop playsInline className="rounded-xl">
          <source src={props.project.content[0]} type="video/webm" />
          <source src={props.project.content[1]} type="video/mp4" />
        </video>
      </div>
      {props.project.name != "nonogram" && (
        <div
          className={`flex flex-col gap-16 pl-[18rem] pr-[13rem] text-5xl font-light leading-normal text-darker-gray dark:text-off-white 3xl:pr-[10rem] 
                    3xl:text-4xl 3xl:leading-normal 2xl:text-3xl 2xl:leading-relaxed xl:pl-[14rem] xl:text-[2.75vw] lg:px-[4rem] 
                    lg:text-[3.5vw] md:px-[3rem] md:text-[3.75vw] sm:text-[5vw] xs:text-[5.5vw] xs:leading-[1.85]`}
        >
          {props.project.paragraphs.slice(2)?.map((pg, i) => {
            return <span key={props.project.name + i}>{pg}</span>;
          })}
        </div>
      )}
      {props.project.name != "nonogram" && (
        <div className="flex w-full justify-center">
          <img
            src={props.project.content[2]}
            alt={props.project.alts[0]}
            className="w-[50vw] rounded-xl lg:w-[30vw] md:w-[33vw] sm:w-[38vw] xs:w-[50vw]"
          />
        </div>
      )}
    </div>
  );
}
