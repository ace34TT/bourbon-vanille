/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Euler, Vector3 } from "three";
import { useContext, useEffect, useRef, useState } from "react";
import { useThree, GroupProps, useFrame } from "react-three-fiber";
import { ModelContext } from "../../context/ModelContext";

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
  const { position, rotation, setPosition, setRotation } =
    useContext(ModelContext);
  // animation
  const modelRef = useRef<THREE.Group>(null);
  const previousPosition = useRef(position);
  useEffect(() => {
    previousPosition.current = position;
  }, [position]);
  useFrame(() => {
    if (previousPosition.current !== position) {
      modelRef!.current!.position.copy(new Vector3(...position));
      previousPosition.current = position;
    }
  });
  //
  const { camera } = useThree();
  camera.lookAt(new Vector3(0, 0, 0));
  return (
    <group
      {...props}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={[0.07, 0.07, 0.04]}
      ref={modelRef}
    >
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
