import { Suspense, useContext, useEffect, useRef, useState } from "react";
import {
  Environment,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import { Model } from "./MainModel";
import { CameraContext } from "../../context/CameraContext";
import { Vector3, PerspectiveCamera as PerspectiveCameraType } from "three";
import gsap from "gsap";
import { arePositionsEqual } from "../../helpers/camera.util";
export default function Scene() {
  const cameraRef = useRef<PerspectiveCameraType>(null);

  // Set the previousPosition ref's initial value to the default position
  const previousPosition = useRef<[number, number, number]>([1, 1.5, -3]);

  // Add a state to track if the component has mounted
  const [hasMounted] = useState(false);
  const { position } = useContext(CameraContext);
  useEffect(() => {
    if (
      (!arePositionsEqual(previousPosition.current, position) || !hasMounted) &&
      cameraRef.current
    ) {
      const targetPosition = new Vector3(...position);
      gsap.to(cameraRef.current.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 1,
        onStart: () => {
          previousPosition.current = position;
        },
        onComplete: () => {
          previousPosition.current = position;
        },
      });
    }
  }, [position, hasMounted]);
  cameraRef.current?.lookAt(0, 0, 0);
  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault />
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
