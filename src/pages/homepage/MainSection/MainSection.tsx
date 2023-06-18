import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import ModelContainer from "../../../components/model/ModelContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ITransition, transitions } from "../../../interfaces/ITransition";
gsap.registerPlugin(ScrollTrigger);
export default function MainSection() {
  const [currentSection, setCurrentSection] = useState(1);
  const [canScroll, setCanScroll] = useState(true);
  const handleScroll = useCallback((event: { deltaY: number }) => {
    if (!canScroll) return;
    if (event.deltaY >= 0) {
      setCurrentSection((prevState) => prevState + 1);
    } else {
      setCurrentSection((prevState) => prevState - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);
  useEffect(() => {
    const nextSection = Math.max(1, Math.min(4, currentSection));
    if (nextSection !== currentSection) {
      setCurrentSection(nextSection);
    }
  }, [currentSection]);
  useEffect(() => {
    scroller.scrollTo(`section-${currentSection}`, {
      duration: 500,
      smooth: true,
      onComplete: () => {
        setTimeout(() => {
          setCanScroll(true);
        }, 1000);
      },
    });
  }, [currentSection]);
  // ! Scroll
  useEffect(() => {
    const animateElement = (_element: ITransition, index: number) => {
      setIndex(index + 1);
    };
    const reverseAnimation = (_element: ITransition, index: number) => {
      setIndex(index);
    };
    const createScrollTrigger = (element: ITransition, index: number) => {
      ScrollTrigger.create({
        markers: true,
        trigger: "." + element.section,
        start: "center 15%",
        end: "bottom 90%",
        onEnter: () => animateElement(element, index),
        onLeaveBack: () => reverseAnimation(element, index),
      });
    };
    transitions.forEach((element, index) =>
      createScrollTrigger(element, index)
    );
  }, []);
  return (
    <div className="relative">
      <div className="sticky top-0">
        <ModelContainer />
      </div>
      <Element className="section-1" name="section-1">
        <div
          className="sub-section sub-section-1 px-32 flex justify-around items-center h-screen w-screen"
          id="section1"
        >
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white opacity-100">
            Sub-1 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Omnis illum nihil deleniti repellat ipsam.
          </div>
          <div className="flex-1"></div>
        </div>
      </Element>
      <Element className="h-screen bg-red-300 section-2" name="section-2">
        <div
          className="sub-section sub-section-2 px-32 flex justify-around items-center h-screen w-screen"
          id="section2"
        >
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white ">
            Sub-2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Omnis illum nihil deleniti repellat ipsam.
          </div>
        </div>
      </Element>
      <Element className="h-screen bg-blue-300" name="section-3">
        <div
          className="sub-section sub-section-3 px-32 flex justify-around items-center h-screen w-screen"
          id="section3"
        >
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam.
          </div>
        </div>
      </Element>
      <Element className="h-screen bg-green-300" name="section-4">
        <div
          className="sub-section sub-section-4 px-32 flex justify-around items-center h-screen w-screen"
          id="section4"
        >
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            illum nihil deleniti repellat ipsam.
          </div>
        </div>
      </Element>
    </div>
  );
}
