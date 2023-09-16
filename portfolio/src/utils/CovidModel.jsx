/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 covid.glb -T -R 512 
Files: covid.glb [15.53MB] > covid-transformed.glb [2.67MB] (83%)
Author: simonthedigger (https://sketchfab.com/abdullahjavedyo90)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/covid-19-fbc12f9d1dad4c49a6a1e30de8d5eae5
Title: COVID-19
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function CovidModel(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/covidCompressed.glb");
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube007_Material001_0.geometry}
        material={materials["Material.001"]}
        position={[-3.43, -4.065, 9.476]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube001_Material004_0.geometry}
        material={materials["Material.004"]}
        position={[1.827, 25.931, 97.478]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={175.429}
      />
      <instancedMesh
        args={[
          nodes.Icosphere001_Material005_0.geometry,
          materials["Material.005"],
          25,
        ]}
        instanceMatrix={nodes.Icosphere001_Material005_0.instanceMatrix}
      />
      <instancedMesh
        args={[
          nodes.Icosphere031_Material003_0.geometry,
          materials["Material.003"],
          112,
        ]}
        instanceMatrix={nodes.Icosphere031_Material003_0.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload("/covidCompressed.glb");
