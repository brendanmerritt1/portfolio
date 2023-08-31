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
  const orbitControlsRef = useRef(null);

  return (
    <div className="hero-element absolute right-0 top-20 h-full w-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera
            makeDefault
            fov={8}
            position={[0, 2, -20]}
            onUpdate={(self) =>
              self.setViewOffset(
                window.innerWidth,
                window.innerHeight,
                -300,
                0,
                window.innerWidth,
                window.innerHeight,
              )
            }
          >
            <ambientLight args={["#ffffff", 0.15]} />
            <directionalLight
              args={["#ffffff", 2]}
              position={[30, 10, 0]}
            />
          </PerspectiveCamera>
          <OrbitControls
            ref={orbitControlsRef}
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            target={[0, 0, 0]}
            // autoRotate
            // autoRotateSpeed={1}
          />
          <Frame orbitControlsRef={orbitControlsRef} />
          <EarthModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
