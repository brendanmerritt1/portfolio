import { useLayoutEffect, useRef } from "react";
import Project from "./HomepageProject";

export default function HomepageProjectList(props) {
  const main = useRef(null);

  // ScrollTrigger video play
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

  return (
    <div className="recent-project relative flex h-full flex-col items-center gap-52 py-64 2xl:gap-[15vw] xl:gap-[12.5vw]">
      <Project
        darkMode={{
          dark: props.dark,
          setDark: props.setDark,
        }}
        source={{
          mp4: "/solar-system-wallpaper-video.mp4",
          webm: "/solar-system-wallpaper-video.mp4",
        }}
        subtitle={"SOFTWARE DEVELOPMENT"}
        title={"Animated Wallpaper Shader"}
        url={"/wallpaper"}
        pos={"start"}
      />
      <Project
        darkMode={{
          dark: props.dark,
          setDark: props.setDark,
        }}
        source={{
          mp4: "/cloudburst-video.mp4",
          webm: "/cloudburst-video.webm",
        }}
        subtitle={"WEB DEVELOPMENT"}
        title={"Cloudburst Lawn Sprinkler Systems"}
        url={"/cloudburst"}
        pos={"end"}
      />
      <Project
        darkMode={{
          dark: props.dark,
          setDark: props.setDark,
        }}
        source={{
          mp4: "/mona-portfolio-video.mp4",
          webm: "/mona-portfolio-video.webm",
        }}
        subtitle={"WEB DEVELOPMENT"}
        title={"Mona Dougani's Portfolio"}
        url={"/mona-portfolio"}
        pos={"start"}
      />
      <Project
        darkMode={{
          dark: props.dark,
          setDark: props.setDark,
        }}
        source={{ mp4: "/covid-19-video.mp4", webm: "/covid-19-video.webm" }}
        subtitle={"WEB DEVELOPMENT"}
        title={"COVID-19 Dashboard"}
        url={"/covid-dashboard"}
        pos={"end"}
      />
      <Project
        darkMode={{
          dark: props.dark,
          setDark: props.setDark,
        }}
        source={{
          mp4: "/ip-tracker-video.mp4",
          webm: "/ip-tracker-video.webm",
        }}
        subtitle={"WEB DEVELOPMENT"}
        title={"IP Tracker Dashboard"}
        url={"/ip-dashboard"}
        pos={"start"}
      />
      <Project
        darkMode={{
          dark: props.dark,
          setDark: props.setDark,
        }}
        source={{ mp4: "/nonogram-video.mp4", webm: "/nonogram-video.webm" }}
        subtitle={"SOFTWARE DEVELOPMENT"}
        title={"Nonogram Game"}
        url={"/nonogram"}
        pos={"end"}
      />
    </div>
  );
}
