import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
export const Loader = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const divRefs = useRef<Array<HTMLDivElement | null>>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!startAnimation) return;
    const tl = gsap.timeline();
    divRefs.current.forEach((div, index) => {
      tl.to(div, { y: "-100vh", duration: 1 }, index * 0.1);
    });
  }, [startAnimation]);
  return (
    <div className="absolute top-0 left-0  h-screen w-screen grid grid-flow-col justify-stretch z-[99]">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (divRefs.current[i] = el)}
          className="bg-secondary h-screen"
        />
      ))}
    </div>
  );
};
