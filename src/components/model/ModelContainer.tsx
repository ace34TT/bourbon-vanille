import { Canvas } from "react-three-fiber";
import Scene from "./Scene";
import { useContext } from "react";
import { CameraContext } from "../../context/CameraContext";

export default function ModelContainer() {
  const { setPosition } = useContext(CameraContext);

  const handleMove = () => {
    setPosition([-1, 1.5, -3]);
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <button
        onClick={() => {
          handleMove();
        }}
      >
        Bonjour
      </button>
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
