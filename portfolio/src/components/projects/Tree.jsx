import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle.js";
import { TreeModel } from "../../utils/TreeModel.jsx";

// Allows tree rotation to a specific degree
function Frame(props) {
  useFrame((state) => {
    if (props.orbitControlsRef.current) {
      const { x } = state.mouse;
      props.orbitControlsRef.current.setAzimuthalAngle(x * -angleToRadians(90));
      props.orbitControlsRef.current.update();
    }
  });
}

export default function Tree() {
  const [width, setWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(-400);
  const [target, setTarget] = useState([0, 8, 0]);
  const [fov, setFov] = useState(60);
  const orbitControlsRef = useRef(null);

  // Changing tree offset depending on screen size
  const updateMedia = () => {
    setWidth(window.innerWidth);
    if (width >= 2560) {
      setOffset(-500);
      setFov(60.1);
      setTarget([0, 9, 0]);
    } else if (width >= 1920) {
      setOffset(-400);
      setFov(60);
      setTarget([0, 8, 0]);
    } else if (width > 1536) {
      setOffset(-300);
      setFov(62);
      setTarget([0, 8, 0]);
    } else if (width > 1280) {
      setOffset(-300);
      setFov(63);
      setTarget([0, 8, 0]);
    } else if (width > 1024) {
      setOffset(-200);
      setFov(80);
      setTarget([0, 8, 0]);
    } else if (width > 768) {
      setOffset(-225);
      setFov(51);
      setTarget([0, 10, 0]);
    } else if (width >= 320) {
      // mobile breakpoints
      setOffset(0);
      setFov(49);
      setTarget([0, 10, 0]);
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
            <ambientLight args={["#ffffff", 1]} />
            <directionalLight args={["#ffffff", 1]} position={[-40, -20, 0]} />
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
          {width > 1024 && <Frame orbitControlsRef={orbitControlsRef} />}
          <TreeModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
