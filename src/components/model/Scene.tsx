import { Suspense, useContext, useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
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
  const { position } = useContext(CameraContext);
  const cameraRef = useRef<PerspectiveCameraType>(null);

  // Set the previousPosition ref's initial value to the default position
  const previousPosition = useRef<[number, number, number]>([...position]);

  // Add a state to track if the component has mounted
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    if (
      (!arePositionsEqual(previousPosition.current, position) || !hasMounted) &&
      cameraRef.current
    ) {
      const currentPosition = cameraRef.current.position.clone();
      const targetPosition = new Vector3(...position);

      gsap.to(currentPosition, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 1,
        onUpdate: () => {
          cameraRef.current!.position.copy(currentPosition);
          console.log("Camera position:", cameraRef.current?.position);
        },
        onComplete: () => {
          previousPosition.current = position;
          setHasMounted(true);
        },
      });
    }
  }, [position, hasMounted]);
  //
  const { camera } = useThree();
  useFrame(() => {
    const [x, y, z] = position;
    camera.lookAt(x, y, z + 5);
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
