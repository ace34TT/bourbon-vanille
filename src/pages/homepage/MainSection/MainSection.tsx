import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { scroller } from "react-scroll";
import { Element } from "react-scroll";
import ModelContainer from "../../../components/model/ModelContainer";

export default function MainSection() {
  const [currentSection, setCurrentSection] = useState(1);
  const [canScroll, setCanScroll] = useState(true);
  const handleScroll = useCallback((event: { deltaY: number }) => {
    if (!canScroll) return;
    if (event.deltaY >= 0) {
      // User scrolled down
      setCurrentSection((prevState) => prevState + 1);
    } else {
      // User scrolled up
      setCurrentSection((prevState) => prevState - 1);
    }
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
    scroller.scrollTo(`section${currentSection}`, {
      duration: 500,
      smooth: true,
      onComplete: () => {
        console.log("done");
        setTimeout(() => {
          setCanScroll(true);
        }, 1000); // Delay of 1 second (1000 milliseconds)
      },
    });
  }, [currentSection]);

  return (
    <div className="relative">
      <div className="sticky top-0">
        <ModelContainer />
      </div>
      <Element name="section1">
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
      <Element className="h-screen bg-red-300" name="section2">
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
      <Element className="h-screen bg-blue-300" name="section3">
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
      <Element className="h-screen bg-green-300" name="section4">
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
