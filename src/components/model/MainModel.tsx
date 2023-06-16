/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Vector3 } from "three";
import { useContext, useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Circle035: THREE.Mesh;
    Circle030: THREE.Mesh;
  };
  materials: {
    ["Sisal Rope"]: THREE.MeshStandardMaterial;
    ["Stylized Tree Truck"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "models/Vanilla-transformed.glb"
  ) as GLTFResult;
  //

  // animation
  const modelRef = useRef<THREE.Group>(null);
  //
  const { camera } = useThree();
  camera.lookAt(new Vector3(0, 0, 0));
  return (
    <group {...props} dispose={null} scale={[0.07, 0.07, 0.04]} ref={modelRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle035.geometry}
        material={materials["Sisal Rope"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle030.geometry}
        material={materials["Stylized Tree Truck"]}
      />
    </group>
  );
}

useGLTF.preload("models/Vanilla-transformed.glb");
