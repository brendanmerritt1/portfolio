import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ProjectDescription from "./pages/ProjectDescription";
import { ScrollRestoration } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

gsap.registerPlugin(ScrollTrigger);

function Root() {
  const [dark, setDark] = useState(null);
  const lenisRef = useRef();

  useEffect(() => {
    // Smooth Scroll setup
    function update(time) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    // lenisRef.current?.on("scroll", ScrollTrigger.update());

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis ref={lenisRef} root autoRaf={false} options={{ duration: 3 }}>
        <Routes>
          <Route
            path="/"
            element={<Homepage dark={dark} setDark={setDark} />}
          />
          <Route
            path="/about"
            element={<About dark={dark} setDark={setDark} />}
          />
          <Route
            path="/wallpaper"
            element={
              <ProjectDescription
                dark={dark}
                setDark={setDark}
                project={"wallpaper"}
              />
            }
          />
          <Route
            path="/cloudburst"
            element={
              <ProjectDescription
                dark={dark}
                setDark={setDark}
                project={"cloudburst"}
              />
            }
          />
          <Route
            path="/mona-portfolio"
            element={
              <ProjectDescription
                dark={dark}
                setDark={setDark}
                project={"mona-portfolio"}
              />
            }
          />
          <Route
            path="/covid-dashboard"
            element={
              <ProjectDescription
                dark={dark}
                setDark={setDark}
                project={"covid-dashboard"}
              />
            }
          />
          <Route
            path="/ip-dashboard"
            element={
              <ProjectDescription
                dark={dark}
                setDark={setDark}
                project={"ip-dashboard"}
              />
            }
          />
          <Route
            path="/nonogram"
            element={
              <ProjectDescription
                dark={dark}
                setDark={setDark}
                project={"nonogram"}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ScrollRestoration />
    </ReactLenis>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
