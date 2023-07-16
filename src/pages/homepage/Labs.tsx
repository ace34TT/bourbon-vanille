import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const Labs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const sectionsArray = Array.from(sections.current);

    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      const threshold = 50;
      const deltaY = event.deltaY;

      if (deltaY > threshold) {
        const nextSection = sectionsArray.find(
          (section) => section.offsetTop > container!.scrollTop
        );
        gsap.to(container, { scrollTop: nextSection!.offsetTop, duration: 1 });
      } else if (deltaY < -threshold) {
        const prevSection = sectionsArray
          .slice()
          .reverse()
          .find((section) => section.offsetTop < container!.scrollTop);
        gsap.to(container, { scrollTop: prevSection!.offsetTop, duration: 1 });
      }
    };
    container!.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      container!.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="container">
      <section
        ref={(el) => (sections.current[0] = el!)}
        className="section flex h-screen w-screen items-center justify-center"
      >
        Section 1
      </section>
      <section
        ref={(el) => (sections.current[1] = el!)}
        className="section flex h-screen w-screen items-center justify-center"
      >
        Section 2
      </section>
      <section
        ref={(el) => (sections.current[2] = el!)}
        className="section flex h-screen w-screen items-center justify-center"
      >
        Section 3
      </section>
      <section
        ref={(el) => (sections.current[3] = el!)}
        className="section flex h-screen w-screen items-center justify-center"
      >
        Section 4
      </section>
    </div>
  );
};
