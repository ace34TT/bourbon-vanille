import { Suspense, useContext, useEffect, useRef } from "react";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  ScrollControls,
} from "@react-three/drei";
import { Camera, PerspectiveCamera as PerspectiveCameraType } from "three";
import { Model } from "./MainModel";
import { TransitionContext } from "../../context/TransitionContaxt";
import { useThree } from "react-three-fiber";
import { transitions } from "../../interfaces/ITransition";
import { gsap } from "gsap";
export default function Scene() {
  return (
    <>
      <OrthographicCamera
        position={[0, 0, 50]}
        zoom={600}
        near={0.1}
        far={5000}
        makeDefault
      />
      <OrbitControls enableZoom={false} />
      <gridHelper args={[100, 10]} />
      <axesHelper scale={[1, 1, 1]} />
      <Suspense fallback={null}>
        <ScrollControls pages={4} damping={0.25}>
          <Model />
        </ScrollControls>
        <Environment preset="warehouse" />
      </Suspense>
    </>
  );
}
