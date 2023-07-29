import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bg_1, bg_2, bg_3, bg_4 } from "../../../imports/background.import";
import ModelContainer from "../../../components/model/ModelContainer";
import { ProgressContext } from "../../../context/ProgressContext";

const sectionRelations = [
  { bg: "bg-4", subSection: "sub-section-2" },
  { bg: "bg-3", subSection: "sub-section-3" },
  { bg: "bg-2", subSection: "sub-section-4" },
];
gsap.registerPlugin(ScrollTrigger);
export default function MainSection() {
  const containerRef = useRef<any>(null);
  useEffect(() => {
    const animateElement = (bg: string) => {
      gsap.fromTo(
        "." + bg,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -100, duration: 1 }
      );
    };
    const reverseAnimation = (bg: string) => {
      gsap.fromTo(
        "." + bg,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 }
      );
    };
    const createScrollTrigger = (element: {
      bg: string;
      subSection: string;
    }) => {
      ScrollTrigger.create({
        // markers: true,
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
    const createScrollTrigger = (element: {
      bg: string;
      subSection: string;
    }) => {
      gsap.fromTo(
        "." + element.subSection,
        { opacity: 0 },
        {
          opacity: 0.95,
          scrollTrigger: {
            trigger: "." + element.subSection,
            start: "top 50%",
            end: "bottom bottom",
            scrub: true,
            // markers: true,
          },
        }
      );
    };
    sectionRelations.forEach((element) => createScrollTrigger(element));
  }, []);
  const { progress } = useContext(ProgressContext);
  return (
    <div
      ref={containerRef}
      className="3d-section z-10 relative max-w-full bg-red-600"
    >
      <div className="w-screen h-screen sticky float-left top-0 left-0 z-[50]">
        <ModelContainer containerRef={containerRef} className="" />
      </div>
      <div className="max-w-[100vw] h-screen main-section sticky top-0 left-0 relative ">
        <div
          className="bg-1 w-full h-full absolute z-[9] brightness-50"
          style={{ zIndex: 10 }}
        >
          <div className="w-screen h-screen absolute top-0 left-0 bg-[#162d1eb3] z-[10]"></div>
          <img
            src={bg_1}
            alt="Your Image"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div
          className="bg-2 w-full h-full absolute z-[9] brightness-50"
          style={{ zIndex: 20 }}
        >
          {" "}
          <div className="w-screen h-screen absolute top-0 left-0 bg-[#162d1eb3] z-[10]"></div>
          <img
            src={bg_2}
            alt="Your Image"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div
          className="bg-3 w-full h-full absolute z-[9] brightness-50"
          style={{ zIndex: 30 }}
        >
          {" "}
          <div className="w-screen h-screen absolute top-0 left-0 bg-[#162d1eb3] z-[10]"></div>
          <img
            src={bg_3}
            alt="Your Image"
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div
          className="bg-4 w-full h-full absolute z-[9] brightness-50"
          style={{ zIndex: 40 }}
        >
          {" "}
          <div className="w-screen h-screen absolute top-0 left-0 bg-[#162d1eb3] z-[10]"></div>
          <img
            src={bg_4}
            alt="Your Image"
            className="w-full h-full object-cover"
          ></img>
        </div>
      </div>
      <div className="sub-section-1 px-32 flex justify-around items-center h-screen max-w-[100vw] absolute top-0 z-10 opacity-100 bg-opacity-100">
        <div className="flex-1 prose max-w-none text-5xl leading-[56px] text-center font-medium text-white opacity-100 playfair-display">
          La Maison Bourbon Vanille née à
          <i className="text-accent playfair-display"> Madagascar </i> ,est un
          trésor rare niche dans un environnement naturel exceptionnellement
          luxueux. {progress}
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="sub-section-2 px-32 flex justify-around items-center h-screen w-screen z-10 ">
        <div className="flex-1"></div>
        <div className="flex-1 prose max-w-none text-5xl leading-[56px] text-center font-medium text-white opacity-100 playfair-display">
          Notre artisanat de haute qualité repose sur les valeurs telles que{" "}
          <i className="text-accent playfair-display">la passion </i> ,
          <i className="text-accent playfair-display">la persévérance </i>
          et <i className="text-accent playfair-display">la patience </i> , nous
          permettant de recueillir des gousses d'exception reflétant notre
          engagement éthique.
        </div>
      </div>
      <div className="sub-section-3 px-32 flex justify-around items-center h-screen w-screen z-10 opacity-75">
        <div className="flex-1"></div>
        <div className="flex-1 prose max-w-none text-5xl leading-[56px] text-center font-medium text-white opacity-100 playfair-display">
          Des producteurs locaux engagés pour une
          <i className="text-accent playfair-display">
            {" "}
            vanille de qualité supérieure
          </i>
          respectueuse de l'environnement et du commerce equitable.
        </div>
      </div>
      <div className="sub-section-4 px-32 flex justify-around items-center h-screen w-screen z-10 opacity-75">
        <div className="flex-1"></div>
        <div className="flex-1 prose max-w-none text-5xl leading-[56px] text-center font-medium text-white opacity-100 playfair-display">
          <i className="text-accent playfair-display">
            La vanille de Madagascar,
          </i>{" "}
          pour une expérience gustative inoubliable.
        </div>
      </div>
      <div className="h-screen w-screen bg-gray-500 flex justify-center items-center z-10"></div>
    </div>
  );
}
