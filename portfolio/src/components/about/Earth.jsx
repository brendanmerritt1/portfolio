import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle.js";
import EarthModel from "../../utils/EarthModel.jsx";

// Allows earth rotation to a specific degree
function Frame(props) {
  useFrame((state) => {
    if (props.orbitControlsRef.current) {
      const { x } = state.mouse;
      props.orbitControlsRef.current.setAzimuthalAngle(
        x * -angleToRadians(180),
      );
      props.orbitControlsRef.current.update();
    }
  });
}

export default function Earth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(-300);
  const [fov, setFov] = useState(8);
  const orbitControlsRef = useRef(null);

  // Changing earth offset depending on screen size
  const updateMedia = () => {
    setWidth(window.innerWidth);
    if (width >= 1920) {
      setOffset(-300);
      setFov(8);
    } else if (width > 1536) {
      setOffset(-300);
      setFov(9);
    } else if (width > 1280) {
      setOffset(-300);
      setFov(10);
    } else if (width > 1024) {
      setOffset(-275);
      setFov(11);
    } else if (width > 768) {
      setOffset(-185);
      setFov(6);
    } else if (width >= 320) {
      // mobile breakpoints
      setOffset(0);
      setFov(5.9);
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
    <div className="hero-element absolute right-0 top-20 h-full w-full lg:top-[30%] lg:h-[45%] md:top-28 md:h-[45%] sm:h-[40%]">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            fov={fov}
            position={[0, 2, -20]}
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
            <ambientLight args={["#ffffff", 0.15]} />
            <directionalLight args={["#ffffff", 2]} position={[30, 10, 0]} />
          </PerspectiveCamera>
          <OrbitControls
            ref={orbitControlsRef}
            enablePan={false}
            enableZoom={false}
            enableRotate={width <= 1024 ? true : false}
            minPolarAngle={Math.PI/2}
            maxPolarAngle={Math.PI/2}
            target={[0, 0, 0]}
          />
          {width > 1024 && <Frame orbitControlsRef={orbitControlsRef} />}
          <EarthModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
