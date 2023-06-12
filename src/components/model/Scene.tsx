import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./MainModel";
import { CameraContext } from "../../context/CameraContext";
import { Vector3, PerspectiveCamera as PerspectiveCameraType } from "three";
import { useSpring, a } from "@react-spring/three";
import { useTransition } from "react-spring";
export default function Scene() {
  const cameraRef = useRef<PerspectiveCameraType>(null);

  const { position } = useContext(CameraContext);
  const targetPosition = new Vector3(...position);

  const transitions = useTransition(targetPosition, {
    from: { position: cameraRef.current?.position },
    enter: { position: targetPosition },
    config: {
      duration: 1000,
      easing: (t: number) => t * (2 - t),
    },
  });
  return (
    <>
      {transitions((style, _item) => (
        <a.perspectiveCamera ref={cameraRef} {...style} />
      ))}
      {/* <OrbitControls /> */}
      <gridHelper args={[100, 10]} />
      <axesHelper scale={[1, 1, 1]} />

      <Suspense fallback={null}>
        <Model />
        <Environment preset="warehouse" />
      </Suspense>
    </>
  );
}
