import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const Labs = () => {
  // Use useRef to create a reference to the circle element
  const circleRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(circleRef.current, {
      duration: 3,
      ease: "power1.inOut",
      motionPath: {
        path: "#myPath",
        align: "#myPath",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      paused: true, // Pause the animation initially
    });

    const scrollHandler = () => {
      // For this demo, let's assume the scrollable area is 500px
      const maxScroll = 500;
      const currentScroll = window.pageYOffset;
      const progress = currentScroll / maxScroll;

      if (progress <= 1) {
        animation.progress(progress);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <>
      <svg
        width="600"
        height="200"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-52"
      >
        <path
          id="myPath"
          d="M10 80 Q 77.5 10, 145 80 T 280 80"
          stroke="lightgrey"
          fill="transparent"
        />
        <circle ref={circleRef} r="5" fill="tomato" />
      </svg>
      <div className="h-screen"></div>
    </>
  );
};
