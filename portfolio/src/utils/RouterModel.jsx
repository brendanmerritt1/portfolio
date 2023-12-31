/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 router.glb -T 
Files: router.glb [4.49MB] > router-transformed.glb [795.39KB] (82%)
Author: DailyArt (https://sketchfab.com/D.art)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/router-93c561886acc48bab5a34d02f0a463e5
Title: Router
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function RouterModel(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/routerCompressed.glb");
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["01_-_Default"]}
        rotation={[-Math.PI / 2.5, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/routerCompressed.glb");
