/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 wordpress.glb -T 
Files: wordpress.glb [23.56KB] > wordpress-transformed.glb [3.09KB] (87%)
Author: TimTimGames (https://sketchfab.com/meneer-badger)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/logo-wordpress-52cefc153b1941979b384f5946fa8666
Title: logo wordpress
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function WordpressModel(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/wordpressCompressed.glb");
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes["Line068_01_-_Default_0"].geometry}
        material={materials["01_-_Default"]}
        position={[0.076, 15.202, -0.418]}
        scale={0.418}
      />
    </group>
  );
}

useGLTF.preload("/wordpressCompressed.glb");
