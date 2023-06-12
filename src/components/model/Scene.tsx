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
import { useFrame } from "react-three-fiber";
export default function Scene() {
  const cameraRef = useRef<PerspectiveCameraType>(null);
  const previousPosition = useRef<[number, number, number]>([1, 1.5, -3]);
  const { position } = useContext(CameraContext);
  useEffect(() => {
    // previousPosition.current = position;
    console.log(previousPosition.current, position);
  }, [position]);
  useFrame(() => {
    if (
      !arePositionsEqual(previousPosition.current, position) &&
      cameraRef.current
    ) {
      // console.log(previousPosition.current, position);
      const targetPosition = new Vector3(...position);
      const currentPosition = cameraRef.current.position;

      const animateCamera = () => {
        const newPosition = currentPosition.clone().lerp(targetPosition, 0.05);
        cameraRef.current!.position.copy(newPosition);
        const epsilon = 0.001;
        if (newPosition.distanceToSquared(targetPosition) > epsilon) {
          requestAnimationFrame(animateCamera);
        } else {
          previousPosition.current = position;
        }
      };
      requestAnimationFrame(animateCamera);
    }
  });
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
