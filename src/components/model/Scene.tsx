import { Suspense, useContext, useEffect, useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./MainModel";
import { TransitionContext } from "../../context/TransitionContaxt";
import { useThree } from "react-three-fiber";
import { transitions } from "../../interfaces/ITransition";
import { gsap } from "gsap";
export default function Scene() {
  const cameraRef = useRef<any>(null);
  const { index } = useContext(TransitionContext);
  // #################################
  const {
    camera,
    gl: { domElement },
  } = useThree();
  useEffect(() => {
    cameraAnimate();
  }, [index]);

  function cameraAnimate(): void {
    if (cameraRef.current.target) {
      // gsap.timeline().to(camera.position, {
      //   duration: 1,
      //   repeat: 0,
      //   x: transitions[index].camera.initial.position[0],
      //   y: transitions[index].camera.initial.position[1],
      //   z: transitions[index].camera.initial.position[2],
      //   ease: "power3.inOut",
      // });

      gsap.timeline().to(
        cameraRef.current.target,
        {
          duration: 1,
          repeat: 0,
          x: transitions[index].camera.target.position[0],
          y: transitions[index].camera.target.position[1],
          z: transitions[index].camera.target.position[2],
          ease: "power3.inOut",
        },
        "<"
      );
    }
  }
  return (
    <>
      {/* <PerspectiveCamera ref={cameraRef} makeDefault /> */}
      <OrbitControls
        ref={cameraRef}
        args={[camera, domElement]}
        panSpeed={1}
        maxPolarAngle={Math.PI / 2}
      />
      <gridHelper args={[100, 10]} />
      <axesHelper scale={[1, 1, 1]} />

      <Suspense fallback={null}>
        <Model />
        <Environment preset="warehouse" />
      </Suspense>
    </>
  );
}
