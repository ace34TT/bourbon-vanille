import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
// Register GSAP ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);
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
  return (
    <>
      <section className="min-h-screen bg-indigo-500 flex items-center justify-center">
        Section 1
      </section>
      <section className="min-h-screen bg-red-600 flex items-center justify-center">
        Section 2
      </section>
      <section className="min-h-screen bg-blue-700 flex items-center justify-center">
        Section 3
      </section>
      <section className="min-h-screen bg-pink-800 flex items-center justify-center">
        Section 4
      </section>
    </>
  );
}
