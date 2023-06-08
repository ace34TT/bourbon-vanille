import { Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Model } from "./MainModel";

function Scene() {
  const { camera } = useThree();
  const position: [number, number, number] = [1, 1.5, -3];
  useFrame(() => {
    const [x, y, z] = position;
    camera.lookAt(x, y, z + 5); // Set the camera to look at a fixed point (0, 4, 0)
  });

  return (
    <>
      <PerspectiveCamera position={position} makeDefault />
      <gridHelper args={[100, 10]} />
      <axesHelper scale={[1, 1, 1]} />
      <Suspense fallback={null}>
        <Model position={[0.031, 1.322, -0.055]} />
        <Environment preset="warehouse" />
      </Suspense>
    </>
  );
}
export default function ModelContainer() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
