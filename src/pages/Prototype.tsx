import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Prototype() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="3d-section relative">
        <div className="w-screen h-screen main-section sticky top-0 flex justify-center items-center ">
          Main section
        </div>
        <div className="sub-section-1 px-32 flex justify-around items-center h-screen w-screen absolute top-0 z-10 bg-gray-500 opacity-50">
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui fugiat
            inventore autem quibusdam voluptatibus, placeat rem nisi enim.
            Omnis, expedita totam.
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="sub-section-2 px-32 flex justify-around items-center h-screen w-screen bg-yellow-500 opacity-50">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui fugiat
            inventore autem quibusdam voluptatibus, placeat rem nisi enim.
            Omnis, expedita totam.
          </div>
        </div>
        <div className="sub-section-3 px-32 flex justify-around items-center h-screen w-screen bg-green-500 opacity-50">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui fugiat
            inventore autem quibusdam voluptatibus, placeat rem nisi enim.
            Omnis, expedita totam.
          </div>
        </div>
        <div className="sub-section-3 px-32 flex justify-around items-center h-screen w-screen bg-red-500 opacity-50">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui fugiat
            inventore autem quibusdam voluptatibus, placeat rem nisi enim.
            Omnis, expedita totam.
          </div>
        </div>
      </div>
      <div className="h-screen bg-gray-500 flex justify-center items-center">
        Footer
      </div>
    </>
  );
}
