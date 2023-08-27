import { useState, useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import { PageTransitionContext } from "../../context/PageTransitionContext";
export const Transition = () => {
  const { animationState } = useContext(PageTransitionContext);
  const [zIndex, setZIndex] = useState(50);
  const divRefs = useRef<Array<HTMLDivElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const tl = gsap.timeline();
    if (!containerRef.current) return;
    setZIndex(99);
    switch (animationState) {
      case 1:
        divRefs.current.forEach((div, index) => {
          tl.fromTo(
            div,
            { y: 0, zIndex: "99" },
            { y: "-100vh", zIndex: "99", duration: 1 },
            index * 0.1
          );
        });
        break;
      case 2:
        divRefs.current.forEach((div, index) => {
          tl.fromTo(
            div,
            { y: "-100vh" },
            { y: "-200vh", duration: 1 },
            index * 0.1
          );
        });
        break;
      default:
        setZIndex(0);
        break;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationState]);

  return (
    <div
      ref={containerRef}
      className={`transition-container fixed top-0 left-0 h-screen w-screen grid grid-flow-col justify-stretch z-[${zIndex}]`}
    >
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (divRefs.current[i] = el)}
          className="bg-secondary h-screen relative top-[100vh]"
        />
      ))}
    </div>
  );
};
