import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scroller, Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);
export const Labs = () => {
  const [currentSection, setCurrentSection] = useState(0);
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const delta = event.deltaY;

      if (delta > 0) {
        scroller.scrollTo(`section${currentSection + 1}`, {
          duration: 500,
          smooth: true,
        });
      } else if (delta < 0 && currentSection > 0) {
        scroller.scrollTo(`section${currentSection - 1}`, {
          duration: 500,
          smooth: true,
        });
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSection]);

  return (
    <div className="full-page-snap">
      <Element name="section1" className="w-screen h-screen bg-red-400 section">
        {/* Your content for section 1 */}
      </Element>
      <Element
        name="section2"
        className="w-screen h-screen bg-blue-400 section"
      >
        {/* Your content for section 2 */}
      </Element>
      <Element
        name="section3"
        className="w-screen h-screen bg-green-400 section"
      >
        {/* Your content for section 3 */}
      </Element>
      <Element
        name="section4"
        className="w-screen h-screen bg-yellow-400 section"
      >
        {/* Your content for section 4 */}
      </Element>
    </div>
  );
};
