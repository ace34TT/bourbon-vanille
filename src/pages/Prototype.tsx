import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Prototype() {
  useEffect(() => {
    // Create a timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".items",
        start: "top top",
        end: "bottom top",
        pin: ".main",
        markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <div className="relative h-auto">
        <div className="main absolute top-0 left-0 w-48 h-screen bg-red-600 flex justify-center items-center">
          <h1>Main section</h1>
        </div>
        <div className="items absolute top-0 left-0 border border-black">
          <div className="w-48 h-screen bg-green-600 opacity-50"></div>
          <div className="w-48 h-screen bg-blue-600 opacity-50"></div>
        </div>
      </div>
      <div className="h-screen bg-lime-200"></div>
    </>
  );
}
