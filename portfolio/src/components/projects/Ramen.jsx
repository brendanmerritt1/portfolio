import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle.js";
import RamenModel from "../../utils/RamenModel.jsx";

// Allows ramen bowl rotation to a specific degree
function Frame(props) {
  useFrame((state) => {
    if (props.orbitControlsRef.current) {
      if (props.width > 1024) {
        const { x } = state.mouse;
        props.orbitControlsRef.current.setAzimuthalAngle(
          Math.PI + x * -angleToRadians(30),
        );
      } else {
        props.orbitControlsRef.current.setAzimuthalAngle(Math.PI);
      }
      props.orbitControlsRef.current.update();
    }
  });
}

export default function Ramen() {
  const [width, setWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(-400);
  const [target, setTarget] = useState([0, -0.03, 0]);
  const [fov, setFov] = useState(35);
  const orbitControlsRef = useRef(null);

  // Changing ramen offset depending on screen size
  const updateMedia = () => {
    setWidth(window.innerWidth);
    if (width >= 2560) {
      setOffset(-500);
      setFov(36);
      setTarget([0, -0.03, 0]);
    } else if (width >= 1920) {
      setOffset(-400);
      setFov(35);
      setTarget([0, -0.03, 0]);
    } else if (width > 1536) {
      setOffset(-350);
      setFov(37);
      setTarget([0, -0.03, 0]);
    } else if (width > 1280) {
      setOffset(-300);
      setFov(40);
      setTarget([0, -0.03, 0]);
    } else if (width > 1024) {
      setOffset(-200);
      setFov(48);
      setTarget([0, -0.06, 0]);
    } else if (width > 768) {
      setOffset(-175);
      setFov(35);
      setTarget([0, 0, 0]);
    } else if (width >= 320) {
      // mobile breakpoints
      setOffset(0);
      setFov(28);
      setTarget([0, 0, 0]);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    updateMedia();
  }, []);

  return (
    <div className="hero-element absolute right-0 top-20 h-full w-full lg:top-[25%] lg:h-[55%] md:top-28 md:h-[45%] sm:h-[40%]">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            fov={fov}
            position={[0, 0, 1]}
            onUpdate={(self) =>
              self.setViewOffset(
                window.innerWidth,
                window.innerHeight,
                offset,
                0,
                window.innerWidth,
                window.innerHeight,
              )
            }
          >
            <ambientLight args={["#ffffff", 1]} />
            <directionalLight args={["#ffffff", 2]} position={[10, 20, 0]} />
          </PerspectiveCamera>
          <OrbitControls
            ref={orbitControlsRef}
            enablePan={false}
            enableZoom={false}
            enableRotate={width <= 1024 ? true : false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            target={target}
          />
          <Frame orbitControlsRef={orbitControlsRef} width={width}/>
          <RamenModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
