import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
export default function ModelContainer() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
