import React, { useContext, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TransitionContext } from "../../../context/TransitionContaxt";
import { ITransition, transitions } from "../../../interfaces/ITransition";
import ModelContainer from "../../../components/model/ModelContainer";
// Register GSAP ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
export default function FullPageScroll() {
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Track the current section index
  useEffect(() => {
    const scrollSnapSections = gsap.utils.toArray(".homepage > section");

    const handleScroll = (event: WheelEvent): void => {
      // Only perform the scroll effect for the first four sections
      if (currentIndex >= 4) return;

      event.preventDefault();
      const height = window.innerHeight;
      if (event.deltaY > 0) {
        // Scroll Down
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + 1, scrollSnapSections.length - 1)
        );
        gsap.to(window, {
          scrollTo: { y: height * currentIndex },
          ease: "power1.out",
          duration: 0.8,
        });
      } else {
        // Scroll Up
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        gsap.to(window, {
          scrollTo: { y: height * currentIndex },
          ease: "power1.out",
          duration: 0.8,
        });
      }

      // Custom skipping to the 5th section effect
      if (currentIndex === 4) {
        gsap.to(window, {
          scrollTo: { y: height * currentIndex },
          ease: "power1.out",
          duration: 0.8,
        });
      }
    };
    window.addEventListener("wheel", handleScroll, { passive: false });
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex]);
  // !
  const { setIndex } = useContext(TransitionContext);
  useEffect(() => {
    const animateElement = (_element: ITransition, index: number) => {
      console.log("enter");

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
        end: "80% 90%",
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
    <>
      <div className="sticky top-0">
        <ModelContainer />
      </div>
      <section className="sub-section-1 min-h-screen bg-indigo-500 flex items-center justify-center">
        Section 1
      </section>
      <section className="sub-section-2 min-h-screen bg-red-600 flex items-center justify-center">
        Section 2
      </section>
      <section className="sub-section-3 min-h-screen bg-blue-700 flex items-center justify-center">
        Section 3
      </section>
      <section className="sub-section-4 min-h-screen bg-pink-800 flex items-center justify-center">
        Section 4
      </section>
    </>
  );
}
