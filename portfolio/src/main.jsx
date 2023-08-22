import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage";
import ProjectDescription from "./pages/ProjectDescription";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

gsap.registerPlugin(ScrollTrigger);

function Root() {
  const [dark, setDark] = useState(null);

  // Smooth Scroll setup
  const lenis = new Lenis({
    lerp: 0.1,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage dark={dark} setDark={setDark} lenis={lenis} />}
      />
      <Route
        path="/about"
        element={<Homepage dark={dark} setDark={setDark} lenis={lenis} />}
      />
      <Route
        path="/wallpaper"
        element={<ProjectDescription dark={dark} setDark={setDark} />}
      />
      <Route
        path="/cloudburst"
        element={<Homepage dark={dark} setDark={setDark} lenis={lenis} />}
      />
      <Route
        path="/mona-portfolio"
        element={<Homepage dark={dark} setDark={setDark} lenis={lenis} />}
      />
      <Route
        path="/covid-dashboard"
        element={<Homepage dark={dark} setDark={setDark} lenis={lenis} />}
      />
      <Route
        path="/ip-dashboard"
        element={<Homepage dark={dark} setDark={setDark} lenis={lenis} />}
      />
      <Route
        path="/nonogram"
        element={<Homepage dark={dark} setDark={setDark} lenis={lenis} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
