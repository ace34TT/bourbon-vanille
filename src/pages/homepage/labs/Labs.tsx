import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { bg_1, bg_2, bg_3, bg_4 } from "../../../imports/background.import";

const sectionRelations = [
  { bg: "bg-4", subSection: "sub-section-2" },
  { bg: "bg-3", subSection: "sub-section-3" },
  { bg: "bg-2", subSection: "sub-section-4" },
];
export default function Labs() {
  const containerRef = useRef<any>(null);
  gsap.registerPlugin(ScrollTrigger);
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
        // markers: true,
        trigger: "." + element.subSection,
        start: "top 60%",
        end: "bottom 15%",
        onEnter: () => animateElement(element.bg),
        onLeaveBack: () => reverseAnimation(element.bg),
      });
    };
    sectionRelations.forEach((element) => createScrollTrigger(element));
  }, []);
  useEffect(() => {
    const createScrollTrigger = (element: {
      bg: string;
      subSection: string;
    }) => {
      gsap.fromTo(
        "." + element.subSection,
        { opacity: 0 },
        {
          opacity: 0.95,
          scrollTrigger: {
            trigger: "." + element.subSection,
            start: "top 50%",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },
        },
      );
    };
    sectionRelations.forEach((element) => createScrollTrigger(element));
  }, []);

  return (
    <>
      <div ref={containerRef} className="3d-section relative">
        <div className="main-section relative sticky top-0 h-screen w-screen">
          <div
            className="bg-1 absolute z-10 h-full w-full brightness-50"
            style={{ zIndex: 10 }}
          >
            <img
              src={bg_1}
              alt="Your Image"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div
            className="bg-2 absolute z-20 h-full w-full brightness-50"
            style={{ zIndex: 20 }}
          >
            <img
              src={bg_2}
              alt="Your Image"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div
            className="bg-3 absolute z-30 h-full w-full brightness-50"
            style={{ zIndex: 30 }}
          >
            <img
              src={bg_3}
              alt="Your Image"
              className="h-full w-full object-cover"
            ></img>
          </div>
          <div
            className="bg-4 absolute z-40 h-full w-full brightness-50"
            style={{ zIndex: 40 }}
          >
            <img
              src={bg_4}
              alt="Your Image"
              className="h-full w-full object-cover"
            ></img>
          </div>
        </div>
        {/*  */}
        <div className="sub-section-1 absolute top-0 z-50 flex h-screen w-screen items-center justify-around bg-opacity-100 px-32 opacity-100">
          <div className="prose max-w-none flex-1 text-5xl font-extrabold text-white opacity-100">
            Sub-1 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Omnis illum nihil deleniti repellat ipsam.
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="sub-section-2 z-50 flex h-screen w-screen items-center justify-around px-32 ">
          <div className="flex-1"></div>
          <div className="prose max-w-none flex-1 text-5xl font-extrabold text-white ">
            Sub-2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Omnis illum nihil deleniti repellat ipsam.
          </div>
        </div>
        <div className="sub-section-3 z-50 flex h-screen w-screen items-center justify-around px-32 opacity-75">
          <div className="flex-1"></div>
          <div className="prose max-w-none flex-1 text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam.
          </div>
        </div>
        <div className="sub-section-4 z-50 flex h-screen w-screen items-center justify-around px-32 opacity-75">
          <div className="flex-1"></div>
          <div className="prose max-w-none flex-1 text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam.
          </div>
        </div>
      </div>
    </>
  );
}
