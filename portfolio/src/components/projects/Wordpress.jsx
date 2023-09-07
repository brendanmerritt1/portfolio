import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle.js";
import { WordpressModel } from "../../utils/WordpressModel.jsx";

// Allows wordpress rotation to a specific degree
function Frame(props) {
  useFrame((state) => {
    if (props.orbitControlsRef.current) {
      const { x } = state.mouse;
      props.orbitControlsRef.current.setAzimuthalAngle(x * -angleToRadians(30));
      props.orbitControlsRef.current.update();
    }
  });
}

export default function Wordpress() {
  const [width, setWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(-300);
  const [target, setTarget] = useState([0, 12, 0]);
  const [fov, setFov] = useState(50);
  const orbitControlsRef = useRef(null);

  // Changing wordpress offset depending on screen size
  const updateMedia = () => {
    setWidth(window.innerWidth);
    if (width >= 2560) {
      setOffset(-500);
      setFov(45);
      setTarget([0, 12.5, 0]);
    } else if (width >= 1920) {
      setOffset(-300);
      setFov(50);
      setTarget([0, 12, 0]);
    } else if (width > 1536) {
      setOffset(-300);
      setFov(50.1);
      setTarget([0, 11.5, 0]);
    } else if (width > 1280) {
      setOffset(-300);
      setFov(50.2);
      setTarget([0, 11.5, 0]);
    } else if (width > 1024) {
      setOffset(-300);
      setFov(58);
      setTarget([0, 11, 0]);
    } else if (width > 768) {
      setOffset(-200);
      setFov(35);
      setTarget([0, 12.5, 0]);
    } else if (width >= 320) {
      // mobile breakpoints
      setOffset(0);
      setFov(30);
      setTarget([0, 13, 0]);
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
            <ambientLight args={["#ffffff", 2]} />
            <directionalLight args={["#ffffff", 1]} position={[-40, -60, 0]} />
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
          <WordpressModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
