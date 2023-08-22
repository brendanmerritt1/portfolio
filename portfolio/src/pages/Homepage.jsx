import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectList from "../components/homepage/HomepageProjectList";
import { colors } from "../utils/DarkModeUtils";
import HomepageHeroContent from "../components/homepage/HomepageHeroContent";

export default function Homepage(props) {
  return (
    <div className="flex h-full flex-col overflow-y-auto overflow-x-hidden bg-off-white dark:bg-darker-gray">
      <div className="h-screen">
        <Navbar dark={props.dark} setDark={props.setDark} colors={colors} />
        <HomepageHeroContent dark={props.dark} colors={colors} lenis={props.lenis} />
        <Footer dark={props.dark} />
      </div>
      <ProjectList dark={props.dark} setDark={props.setDark} />
    </div>
  );
}
