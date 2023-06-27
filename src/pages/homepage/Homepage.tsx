import { useRef } from "react";
import { TransitionContextProvider } from "../../context/TransitionContaxt";
import MainSection from "./MainSection/MainSection";
import Purchase from "./Purchase";
import { animateScroll } from "react-scroll";
import FullPageScroll from "./main-section/FullPageScroll";

export default function Prototype() {
  const nextSectionRef = useRef<HTMLDivElement>(null);
  const scrollToNextSection = () => {
    if (nextSectionRef.current) {
      const targetOffsetTop = nextSectionRef.current.offsetTop;
      animateScroll.scrollTo(targetOffsetTop, { duration: 1000, smooth: true });
    }
  };
  return (
    <div className="homepage">
      {/* <TransitionContextProvider>
        <MainSection scrollToNextSection={scrollToNextSection} />
      </TransitionContextProvider> */}
      <FullPageScroll />
      <section className="min-h-screen bg-green-500 flex items-center justify-center">
        Section 5
      </section>
      <section className="min-h-screen bg-yellow-600 flex items-center justify-center">
        Section 6
      </section>
    </div>
  );
}
