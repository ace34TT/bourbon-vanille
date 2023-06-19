import { useCallback, useContext, useEffect, useState } from "react";
import "./style.css";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import ModelContainer from "../../../components/model/ModelContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ITransition, transitions } from "../../../interfaces/ITransition";
import { TransitionContext } from "../../../context/TransitionContaxt";
gsap.registerPlugin(ScrollTrigger);
export default function MainSection() {
  const [currentSection, setCurrentSection] = useState(1);
  const { setIndex } = useContext(TransitionContext);

  const handleScroll = useCallback((event: { deltaY: number }) => {
    const threshold = 50; // Adjust this value as needed for sensitivity
    if (event.deltaY > threshold) {
      setCurrentSection((prevState) => Math.min(prevState + 1, 5));
    } else if (event.deltaY < -threshold) {
      setCurrentSection((prevState) => Math.max(prevState - 1, 1));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    scroller.scrollTo(`section-${currentSection}`, {
      duration: 1000,
      smooth: true,
    });
  }, [currentSection]);
  // ! 3d model animation
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
        start: "center 40%",
        end: "bottom 90%",
        onEnter: () => animateElement(element, index),
        onLeaveBack: () => reverseAnimation(element, index),
      });
    };
    transitions.forEach((element, index) =>
      createScrollTrigger(element, index)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="parent">
      <div className="sticky top-0">
        <ModelContainer />
      </div>
      <Element className="custom-section sub-section-1" name="section-1">
        <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white opacity-100">
          Sub-1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          illum nihil deleniti repellat ipsam.
        </div>
        <div className="flex-1"></div>
      </Element>
      <Element className="custom-section sub-section-2" name="section-2">
        <div className="flex-1"></div>
        <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white ">
          Sub-2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          illum nihil deleniti repellat ipsam.
        </div>
      </Element>
      <Element className="custom-section sub-section-3" name="section-3">
        <div className="flex-1"></div>
        <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis illum
          nihil deleniti repellat ipsam.
        </div>
      </Element>
      <Element className="custom-section sub-section-4" name="section-4">
        <div className="flex-1"></div>
        <div className="flex-1 prose max-w-none text-5xl font-extrabold text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis illum
          nihil deleniti repellat ipsam.
        </div>
      </Element>
      <Element
        className="custom-section sub-section-5 h-screen bg-green-700"
        name="section-5"
      />
      <Element
        className="custom-section sub-section-5 h-screen bg-green-700"
        name="section-5"
      />
    </div>
  );
}
