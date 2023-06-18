import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Vector3 } from "three";
export default function ModelContainer() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
