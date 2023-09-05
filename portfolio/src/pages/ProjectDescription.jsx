import { colors } from "../utils/DarkModeUtils";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectList from "../components/projects/ProjectList";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "@studio-freight/react-lenis";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDescription(props) {
  // Smooth scroll hook
  const lenis = useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    lenis?.scrollTo("start", { duration: 2 });
  }, [lenis, pathname]);
  
  return (
    <div className="flex h-full flex-col overflow-y-auto overflow-x-hidden bg-off-white dark:bg-darker-gray">
      <Navbar dark={props.dark} setDark={props.setDark} colors={colors} />
      <ProjectList dark={props.dark} project={props.project} />
      <Footer dark={props.dark} />
    </div>
  );
}
