import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Homepage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        markers: true,
        trigger: wrapper,
        start: "bottom 80%",
        end: "start 20%",
        pin: true,
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <div ref={containerRef}>
        <div ref={wrapperRef} className="wrapper w-full h-full bg-purple-800">
          <div className="sub-section-1 px-32 flex justify-around items-center h-screen w-screen bg-gray-500 opacity-50">
            <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui
              fugiat inventore autem quibusdam voluptatibus, placeat rem nisi
              enim. Omnis, expedita totam.
            </div>
            <div className="flex-1"></div>
          </div>
          <div className="sub-section-2 px-32 flex justify-around items-center h-screen w-screen bg-yellow-500 opacity-50">
            <div className="flex-1"></div>
            <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui
              fugiat inventore autem quibusdam voluptatibus, placeat rem nisi
              enim. Omnis, expedita totam.
            </div>
          </div>
          <div className="sub-section-3 px-32 flex justify-around items-center h-screen w-screen bg-green-500 opacity-50">
            <div className="flex-1"></div>
            <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui
              fugiat inventore autem quibusdam voluptatibus, placeat rem nisi
              enim. Omnis, expedita totam.
            </div>
          </div>
          <div className="sub-section-3 px-32 flex justify-around items-center h-screen w-screen bg-red-500 opacity-50">
            <div className="flex-1"></div>
            <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui
              fugiat inventore autem quibusdam voluptatibus, placeat rem nisi
              enim. Omnis, expedita totam.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-screen bg-slate-500"></div> */}
    </>
  );
}
