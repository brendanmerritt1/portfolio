import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHeroContent from "../components/about/AboutHeroContent";
import { colors } from "../utils/DarkModeUtils";
import AboutMainContent from "../components/about/AboutMainContent";

export default function About(props) {
  return (
    <div className="flex h-full flex-col overflow-y-auto overflow-x-hidden bg-off-white dark:bg-darker-gray">
      <div className="h-screen">
        <Navbar dark={props.dark} setDark={props.setDark} colors={colors} />
        <AboutHeroContent dark={props.dark} colors={colors} />
        <Footer dark={props.dark} />
      </div>
      <AboutMainContent dark={props.dark}/>
    </div>
  );
}
