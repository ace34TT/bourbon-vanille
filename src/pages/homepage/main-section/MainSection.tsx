import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bg_1, bg_2, bg_3, bg_4 } from "../../../imports/background.import";
import ModelContainer from "../../../components/model/ModelContainer";

const sectionRelations = [
  { bg: "bg-4", subSection: "sub-section-2" },
  { bg: "bg-3", subSection: "sub-section-3" },
  { bg: "bg-2", subSection: "sub-section-4" },
];
gsap.registerPlugin(ScrollTrigger);
export default function MainSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementExists = (selector: string) => {
    const element = document.querySelector(selector);
    return element ? true : false;
  };
  useEffect(() => {
    if (!containerRef.current) return;
    const animateElement = (bg: string) => {
      if (!elementExists("." + bg)) return;
      gsap.fromTo(
        "." + bg,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -100, duration: 1 },
      );
    };
    const reverseAnimation = (bg: string) => {
      if (!elementExists("." + bg)) return;
      gsap.fromTo(
        "." + bg,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 },
      );
    };
    const createScrollTrigger = (element: {
      bg: string;
      subSection: string;
    }) => {
      if (!elementExists("." + element.subSection)) return;
      ScrollTrigger.create({
        markers: true,
        trigger: "." + element.subSection,
        start: "top 60%",
        end: "bottom 15%",
        onEnter: () => animateElement(element.bg),
        onLeaveBack: () => reverseAnimation(element.bg),
      });
    };
    sectionRelations.forEach((element) => createScrollTrigger(element));
  }, []);
  useEffect(() => {
    if (!containerRef.current) return;
    const createScrollTrigger = (element: {
      bg: string;
      subSection: string;
    }) => {
      if (!elementExists("." + element.subSection)) return;
      gsap.fromTo(
        "." + element.subSection,
        { opacity: 0 },
        {
          opacity: 0.95,
          scrollTrigger: {
            trigger: "." + element.subSection,
            start: "top 75%",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },
        },
      );
    };
    sectionRelations.forEach((element) => createScrollTrigger(element));
  }, []);

  return (
    <div
      ref={containerRef}
      className="3d-section relative z-10 max-w-full bg-red-600"
    >
      <div className="sticky left-0 top-0 z-[50] float-left h-screen w-screen">
        <ModelContainer containerRef={containerRef} className="" />
      </div>
      <div className="main-section  sticky left-0 top-0 h-screen max-w-[100vw] ">
        <div
          className="bg-1 absolute z-[9] h-full w-full brightness-50"
          style={{ zIndex: 10 }}
        >
          <div className="absolute left-0 top-0 z-[10] h-screen w-screen bg-[#162d1eb3]"></div>
          <img
            src={bg_1}
            alt="Your Image"
            className="h-full w-full object-cover"
          ></img>
        </div>
        <div
          className="bg-2 absolute z-[9] h-full w-full brightness-50"
          style={{ zIndex: 20 }}
        >
          {" "}
          <div className="absolute left-0 top-0 z-[10] h-screen w-screen bg-[#162d1eb3]"></div>
          <img
            src={bg_2}
            alt="Your Image"
            className="h-full w-full object-cover"
          ></img>
        </div>
        <div
          className="bg-3 absolute z-[9] h-full w-full brightness-50"
          style={{ zIndex: 30 }}
        >
          {" "}
          <div className="absolute left-0 top-0 z-[10] h-screen w-screen bg-[#162d1eb3]"></div>
          <img
            src={bg_3}
            alt="Your Image"
            className="h-full w-full object-cover"
          ></img>
        </div>
        <div
          className="bg-4 absolute z-[9] h-full w-full brightness-50"
          style={{ zIndex: 40 }}
        >
          {" "}
          <div className="absolute left-0 top-0 z-[10] h-screen w-screen bg-[#162d1eb3]"></div>
          <img
            src={bg_4}
            alt="Your Image"
            className="h-full w-full object-cover"
          ></img>
        </div>
      </div>
      <div className="sub-section-1 absolute top-0 z-10 flex h-screen max-w-[100vw] items-center justify-around bg-opacity-100 px-32 opacity-100">
        <div className="playfair-display prose max-w-none  flex-1 text-center font-medium leading-[56px] text-white opacity-100 lg:text-4xl 2xl:text-5xl">
          La Maison Bourbon Vanille née à
          <i className="playfair-display text-accent"> Madagascar </i> ,est un
          trésor rare niche dans un environnement naturel exceptionnellement
          luxueux.
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="sub-section-2 z-10 flex h-[70vh] w-screen items-start justify-around px-32 ">
        <div className="flex-1"></div>
        <div className="playfair-display prose max-w-none  flex-1 text-center font-medium leading-[56px] text-white opacity-100 lg:text-4xl 2xl:text-5xl">
          Notre artisanat de haute qualité repose sur les valeurs telles que{" "}
          <i className="playfair-display text-accent">la passion </i> ,
          <i className="playfair-display text-accent">la persévérance </i>
          et <i className="playfair-display text-accent">la patience </i> , nous
          permettant de recueillir des gousses d'exception reflétant notre
          engagement éthique.
        </div>
      </div>
      <div className="sub-section-3 z-10 flex h-[70vh] w-screen items-start justify-around px-32 opacity-75">
        <div className="flex-1"></div>
        <div className="playfair-display prose max-w-none  flex-1 text-center font-medium leading-[56px] text-white opacity-100 lg:text-4xl 2xl:text-5xl">
          Des producteurs locaux engagés pour une
          <i className="playfair-display text-accent">
            {" "}
            vanille de qualité supérieure
          </i>
          respectueuse de l'environnement et du commerce equitable.
        </div>
      </div>
      <div className="sub-section-4 z-10 flex h-[100vh] w-screen items-start justify-around px-32 opacity-75">
        <div className="flex-1"></div>
        <div className="playfair-display prose max-w-none  flex-1 text-center font-medium leading-[56px] text-white opacity-100 lg:text-4xl 2xl:text-5xl">
          <i className="playfair-display text-accent">
            La vanille de Madagascar,
          </i>{" "}
          pour une expérience gustative inoubliable.
        </div>
      </div>
      <div className="z-10 flex h-[50vh] w-screen items-center justify-center bg-gray-500" />
    </div>
  );
}
