/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: tobyporter (https://sketchfab.com/tobyporter)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rubix-cube-model-19-15659e4d336c454ab0b7f9fc451121fe
Title: Rubix Cube Model 1/9
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RubiksModel(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/rubiks.glb");
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-25.92, 4.186, -38.373]} rotation={[0.3, 0.5, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube82_phong2_0.geometry}
            material={materials.phong2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube82_phong3_0.geometry}
            material={materials.phong3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube82_green_0.geometry}
            material={materials.green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube82_orange_0.geometry}
            material={materials.orange}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube82_white_0.geometry}
            material={materials.white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube82_blue_0.geometry}
            material={materials.blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube82_yellow_0.geometry}
            material={materials.yellow}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/rubiks.glb");
