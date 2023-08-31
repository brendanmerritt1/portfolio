/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Akshat (https://sketchfab.com/shooter24994)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa
Title: Earth
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function EarthModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/Earth.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material002_0.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI/2, -0.35, 0]}
        scale={1}
      />
    </group>
  );
}

useGLTF.preload("/Earth.glb");