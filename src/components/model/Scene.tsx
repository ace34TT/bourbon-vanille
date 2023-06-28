import { Suspense, useContext, useEffect, useRef } from "react";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  ScrollControls,
} from "@react-three/drei";
import { OrthographicCamera as OrthographicCameraType } from "three";
import { Model } from "./MainModel";
import { TransitionContext } from "../../context/TransitionContaxt";
import { transitions } from "../../interfaces/ITransition";
import { gsap } from "gsap";

export default function Scene() {
  const cameraRef = useRef<OrthographicCameraType>();
  const { index } = useContext(TransitionContext);
  useEffect(() => {
    if (index >= 0 && index < transitions.length) {
      if (cameraRef.current !== undefined) {
        gsap.to(cameraRef.current, {
          duration: 1,
          zoom: transitions[index].camera.zoom,
        });
      }
    }
  }, [index]);
  return (
    <>
      <OrthographicCamera
        ref={cameraRef}
        position={[0, 0, 50]}
        zoom={600}
        near={0.1}
        far={5000}
        makeDefault
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      {/* <gridHelper args={[100, 10]} />
      <axesHelper scale={[1, 1, 1]} /> */}
      <Suspense fallback={null}>
        <ScrollControls pages={4} damping={0.25}>
          <Model />
        </ScrollControls>
        <Environment preset="warehouse" />
      </Suspense>
    </>
  );
}
