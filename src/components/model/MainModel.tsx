/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Euler, Vector3 } from "three";
import { useState } from "react";
import { useThree, GroupProps } from "react-three-fiber";

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
interface ModelProps extends GroupProps {
  position: [number, number, number];
}
export function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF(
    "models/Vanilla-transformed.glb"
  ) as GLTFResult;

  const [rotation, setRotation] = useState<Euler>(new Euler(0, 0.65, -3.13));
  const { camera } = useThree();
  camera.lookAt(new Vector3(0, 0, 0));
  return (
    <group
      {...props}
      dispose={null}
      position={props.position}
      rotation={rotation}
      scale={[0.07, 0.07, 0.04]}
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
