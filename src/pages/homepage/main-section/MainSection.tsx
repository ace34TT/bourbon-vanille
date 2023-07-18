import { useCallback, useContext, useEffect, useRef, useState } from "react";
// import "./style.css";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import ModelContainer from "../../../components/model/ModelContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ITransition, transitions } from "../../../interfaces/ITransition";
import { TransitionContext } from "../../../context/TransitionContaxt";
import purchaseBG from "./../../../assets/backgrounds/6.jpg";
import { debounce } from "lodash";
import { bg_1, bg_2, bg_3, bg_4 } from "../../../imports/background.import";

gsap.registerPlugin(ScrollTrigger);

const sectionRelations = [
  { bg: "bg-4", subSection: "sub-section-2" },
  { bg: "bg-3", subSection: "sub-section-3" },
  { bg: "bg-2", subSection: "sub-section-4" },
];
gsap.registerPlugin(ScrollTrigger);
export default function MainSection() {
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
        markers: true,
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
            markers: true,
          },
        }
      );
    };
    sectionRelations.forEach((element) => createScrollTrigger(element));
  }, []);

  // ! 3d model animation
  {
    /* <div className="fixed top-0">
          <ModelContainer />
        </div> */
  }
  return (
    <>
      <div ref={containerRef} className="3d-section relative z-10">
        <div className="w-screen h-screen main-section sticky top-0 relative">
          <div
            className="bg-1 w-full h-full absolute z-10 brightness-50"
            style={{ zIndex: 10 }}
          >
            <img
              src={bg_1}
              alt="Your Image"
              className="w-full h-full object-cover"
            ></img>
          </div>
          <div
            className="bg-2 w-full h-full absolute z-20 brightness-50"
            style={{ zIndex: 20 }}
          >
            <img
              src={bg_2}
              alt="Your Image"
              className="w-full h-full object-cover"
            ></img>
          </div>
          <div
            className="bg-3 w-full h-full absolute z-30 brightness-50"
            style={{ zIndex: 30 }}
          >
            <img
              src={bg_3}
              alt="Your Image"
              className="w-full h-full object-cover"
            ></img>
          </div>
          <div
            className="bg-4 w-full h-full absolute z-40 brightness-50"
            style={{ zIndex: 40 }}
          >
            <img
              src={bg_4}
              alt="Your Image"
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>
        {/*  */}
        <div className="sub-section-1 px-32 flex justify-around items-center h-screen w-screen absolute top-0 z-50 opacity-100 bg-opacity-100">
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white opacity-100">
            Sub-1 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Omnis illum nihil deleniti repellat ipsam.
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="sub-section-2 px-32 flex justify-around items-center h-screen w-screen z-50 ">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white ">
            Sub-2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Omnis illum nihil deleniti repellat ipsam.
          </div>
        </div>
        <div className="sub-section-3 px-32 flex justify-around items-center h-screen w-screen z-50 opacity-75">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam.
          </div>
        </div>
        <div className="sub-section-4 px-32 flex justify-around items-center h-screen w-screen z-50 opacity-75">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam.
          </div>
        </div>
      </div>
      <div className="footer h-screen bg-gray-500 flex justify-center items-center">
        Footer
      </div>
    </>
  );
}
