import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle.js";
import MountainModel from "../../utils/MountainModel.jsx";

export default function Mountain() {
  const orbitControlsRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth <= 1024 && window.innerWidth > 768,
  );

  let orbitTarget, fov;
  if (isMobile) {
    orbitTarget = [0, 0.25, 0];
    fov = 1.8;
  } else if (isTablet) {
    orbitTarget = [0, 0.25, 0];
    fov = 1.6;
  } else {
    orbitTarget = [0, 0.45, 0];
    fov = 3;
  }

  // Allows mountain rotation to a specific degree
  function Frame(props) {
    useFrame((state) => {
      if (props.orbitControlsRef.current) {
        const { x } = state.mouse;
        props.orbitControlsRef.current.setAzimuthalAngle(
          -2.51279636717436 + x * -angleToRadians(isMobile ? 90 : 45),
        );
        props.orbitControlsRef.current.update();
      }
    });
  }

  // Changing mountain orientation depending on screen size
  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 768);
    setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
    if (isMobile) {
      orbitTarget = [0, 0.25, 0];
      fov = 1.8;
    } else if (isTablet) {
      orbitTarget = [0, 0.25, 0];
      fov = 1.6;
    } else {
      orbitTarget = [0, 0.45, 0];
      fov = 3;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="hero-element absolute left-0 top-20 h-full w-full lg:bottom-0 lg:top-auto lg:h-[35%] xs:h-[30%]">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault fov={fov} position={[-8, 2, -11]} />
          <OrbitControls
            ref={orbitControlsRef}
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            target={orbitTarget}
          />
          <Frame orbitControlsRef={orbitControlsRef} />
          <ambientLight args={["#ffffff", 2]} />
          <MountainModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
