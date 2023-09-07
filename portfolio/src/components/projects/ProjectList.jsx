import ProjectHeroContent from "./ProjectHeroContent";
import data from "../../utils/Projects.json";
import ProjectMainContent from "./ProjectMainContent";
import Earth from "./Earth";
import Tree from "./Tree";
import Wordpress from "./Wordpress";
import Covid from "./Covid";
import RouterModem from "./RouterModem";
import Rubiks from "./Rubiks";

export default function ProjectList(props) {
  const projects = data.projects.map((project) => {
    return {
      id: project.id,
      name: project.name,
      subtitle: project.subtitle,
      title: project.title,
      hashtags: project.hashtags,
      linkTitles: project.linkTitles,
      links: project.links,
      paragraphs: project.paragraphs,
      content: project.content,
      alts: project.alts,
    };
  });

  return (
    <>
      {props.project == "wallpaper" && (
        <>
          <ProjectHeroContent
            subtitle={
              projects.find((proj) => proj.name == "wallpaper").subtitle
            }
            title={projects.find((proj) => proj.name == "wallpaper").title}
            model={<Earth />}
          />
          <ProjectMainContent
            dark={props.dark}
            project={projects.find((proj) => proj.name == "wallpaper")}
          />
        </>
      )}
      {props.project == "cloudburst" && (
        <>
          <ProjectHeroContent
            subtitle={
              projects.find((proj) => proj.name == "cloudburst").subtitle
            }
            title={projects.find((proj) => proj.name == "cloudburst").title}
            model={<Tree />}
          />
          <ProjectMainContent
            dark={props.dark}
            project={projects.find((proj) => proj.name == "cloudburst")}
          />
        </>
      )}
      {props.project == "mona-portfolio" && (
        <>
          <ProjectHeroContent
            subtitle={
              projects.find((proj) => proj.name == "mona-portfolio").subtitle
            }
            title={projects.find((proj) => proj.name == "mona-portfolio").title}
            model={<Wordpress />}
          />
          <ProjectMainContent
            dark={props.dark}
            project={projects.find((proj) => proj.name == "mona-portfolio")}
          />
        </>
      )}
      {props.project == "covid-dashboard" && (
        <>
          <ProjectHeroContent
            subtitle={
              projects.find((proj) => proj.name == "covid-dashboard").subtitle
            }
            title={
              projects.find((proj) => proj.name == "covid-dashboard").title
            }
            model={<Covid />}
          />
          <ProjectMainContent
            dark={props.dark}
            project={projects.find((proj) => proj.name == "covid-dashboard")}
          />
        </>
      )}
      {props.project == "ip-dashboard" && (
        <>
          <ProjectHeroContent
            subtitle={
              projects.find((proj) => proj.name == "ip-dashboard").subtitle
            }
            title={projects.find((proj) => proj.name == "ip-dashboard").title}
            model={<RouterModem />}
          />
          <ProjectMainContent
            dark={props.dark}
            project={projects.find((proj) => proj.name == "ip-dashboard")}
          />
        </>
      )}
      {props.project == "nonogram" && (
        <>
          <ProjectHeroContent
            subtitle={projects.find((proj) => proj.name == "nonogram").subtitle}
            title={projects.find((proj) => proj.name == "nonogram").title}
            model={<Rubiks />}
          />
          <ProjectMainContent
            dark={props.dark}
            project={projects.find((proj) => proj.name == "nonogram")}
          />
        </>
      )}
    </>
  );
}
