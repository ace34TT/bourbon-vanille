'use client'
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
//
const loadImage = async (path: string): Promise<string> => {
  try {
    const imageModule = await import(path);
    return imageModule.default;
  } catch (error) {
    console.error("Error loading image:", error);
    return "";
  }
};

const imagePaths = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/5.jpg",
];
const sectionRelations = [
  { bg: "bg-4", subSection: "sub-section-2" },
  { bg: "bg-3", subSection: "sub-section-3" },
  { bg: "bg-2", subSection: "sub-section-4" },
];
export default function Prototype() {
  const [loadedImages, setLoadedImages] = useState<any[]>([]);
  const containerRef = useRef<any>(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const loadImages = async () => {
      const loaded = await Promise.all(
        imagePaths.map((path) => loadImage(path))
      );
      setLoadedImages(loaded);
    };
    loadImages();
  }, []);

  useEffect(() => {
    const animateElement = (bg: string) => {
      gsap.fromTo("." + bg, { opacity: 1 }, { opacity: 0, duration: 1 });
    };
    const reverseAnimation = (bg: string) => {
      gsap.fromTo("." + bg, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    };
    const createScrollTrigger = (element: {
      bg: string;
      subSection: string;
    }) => {
      ScrollTrigger.create({
        markers: true,
        trigger: "." + element.subSection,
        start: "top 80%",
        end: "bottom 15%",
        onEnter: () => animateElement(element.bg),
        onLeaveBack: () => reverseAnimation(element.bg),
      });
    };

    sectionRelations.forEach((element) => createScrollTrigger(element));
  }, []);

  return (
    <>
      <div ref={containerRef} className="3d-section relative">
        <div className="w-screen h-screen main-section sticky top-0 relative">
          <div
            className="bg-1 w-full h-full absolute z-10 brightness-50"
            style={{ zIndex: 10 }}
          >
            <Image
              src='/1.jpg'
              alt="Your Image"
              className="w-full h-full object-cover"
              width={2000}
              height={2002}
              style={{width:'100%'}}
            />
          </div>
          <div
            className="bg-2 w-full h-full absolute z-20 brightness-50"
            style={{ zIndex: 20 }}
          >
             <Image
              src='/2.jpg'
              alt="Your Image"
              className="w-full h-full object-cover"
              width={2000}
              height={2002}
              style={{width:'100%'}}
            />
          </div>
          <div
            className="bg-3 w-full h-full absolute z-30 brightness-50"
            style={{ zIndex: 30 }}
          >
             <Image
              src='/3.jpg'
              alt="Your Image"
              className="w-full h-full object-cover"
              width={2000}
              height={2002}
              style={{width:'100%'}}
            />
          </div>
          <div
            className="bg-4 w-full h-full absolute z-40 brightness-50"
            style={{ zIndex: 40 }}
          >
             <Image
              src='/5.jpg'
              alt="Your Image"
              className="w-full h-full object-cover"
              width={2000}
              height={2002}
              style={{width:'100%'}}
            />
          </div>
        </div>
        {/*  */}
        <div className="sub-section-1 px-32 flex justify-around items-center h-screen w-screen absolute top-0 z-50 opacity-100">
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui fugiat
            inventore autem quibusdam voluptatibus, placeat rem nisi enim.
            Omnis, expedita totam.
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="sub-section-2 px-32 flex justify-around items-center h-screen w-screen z-50 opacity-75">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui fugiat
            inventore autem quibusdam voluptatibus, placeat rem nisi enim.
            Omnis, expedita totam.
          </div>
        </div>
        <div className="sub-section-3 px-32 flex justify-around items-center h-screen w-screen z-50 opacity-75">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui fugiat
            inventore autem quibusdam voluptatibus, placeat rem nisi enim.
            Omnis, expedita totam.
          </div>
        </div>
        <div className="sub-section-4 px-32 flex justify-around items-center h-screen w-screen z-50 opacity-75">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam. Aliquid mollitia in, qui fugiat
            inventore autem quibusdam voluptatibus, placeat rem nisi enim.
            Omnis, expedita totam.
          </div>
        </div>
      </div>
      <div className="footer h-screen bg-gray-500 flex justify-center items-center">
        Footer
      </div>
    </>
  );
}
