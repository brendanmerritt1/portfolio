import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../utils/angle.js";
import MountainModel from "../utils/MountainModel.jsx";

function Frame(props) {
  useFrame((state) => {
    if (props.orbitControlsRef.current) {
      const { x } = state.mouse;
      props.orbitControlsRef.current.setAzimuthalAngle(
        x * -angleToRadians(45),
      );
      props.orbitControlsRef.current.update();
    }
  });
}

//-2.51279636717436 + 

export default function Mountain() {
  const orbitControlsRef = useRef(null);

  useEffect(() => {
    if (orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, []);

  return (
    <div className="absolute left-0 h-full w-full top-20">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault fov={3} position={[-8, 2, -11]} />
          <OrbitControls
            ref={orbitControlsRef}
            enablePan={false}
            enableZoom={false}
            enableRotate={false}
            target={[0, 0.45, 0]}
          />
          <Frame orbitControlsRef={orbitControlsRef} />
          <ambientLight args={["#ffffff", 2]} />
          <MountainModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
