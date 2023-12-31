import Project from "./HomepageProject";

export default function HomepageProjectList(props) {
  return (
    <div className="recent-project relative flex h-full flex-col items-center gap-[11vw] py-64 2xl:gap-[15vw] lg:gap-[20vw] lg:py-48 md:gap-[15vw] sm:gap-36 xs:gap-28 xs:pb-28 xs:pt-12 xxs:gap-20 xxs:pt-16">
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
