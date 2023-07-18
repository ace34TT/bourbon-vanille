import { Suspense, useRef } from "react";
import {
  Environment,
  OrthographicCamera,
  ScrollControls,
} from "@react-three/drei";
import { OrthographicCamera as OrthographicCameraType } from "three";
import { Model } from "./MainModel";
import { Canvas } from "react-three-fiber";

interface IProps {
  containerRef: any;
  className: string;
}
export default function ModelContainer({ containerRef, className }: IProps) {
  const cameraRef = useRef<OrthographicCameraType>();
  return (
    <div style={{ width: "100vw", height: "100vh" }} className={`${className}`}>
      <Canvas>
        <OrthographicCamera
          ref={cameraRef}
          position={[0, 0, 1]}
          zoom={600}
          near={0.1}
          far={5000}
          makeDefault
        />
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.25}>
            <Model cameraRef={cameraRef} containerRef={containerRef} />
          </ScrollControls>
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
    </div>
  );
}
