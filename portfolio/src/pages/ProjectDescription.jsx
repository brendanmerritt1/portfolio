import { colors } from "../utils/DarkModeUtils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectHeroContent from "../components/projects/ProjectHeroContent";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDescription(props) {
  return (
    <div className="flex h-full flex-col overflow-y-auto overflow-x-hidden bg-off-white dark:bg-darker-gray">
      <div className="h-screen">
        <Navbar dark={props.dark} setDark={props.setDark} colors={colors} />
        <ProjectHeroContent dark={props.dark} />
        <Footer dark={props.dark} />
      </div>
    </div>
  );
}
