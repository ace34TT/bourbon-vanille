import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import { useContext, useEffect } from "react";
import { TransitionContext } from "../../../context/TransitionContaxt";
import { ITransition, transitions } from "../../../interfaces/ITransition";
gsap.registerPlugin(ScrollTrigger);

export const Labs = () => {
  // const { setIndex } = useContext(TransitionContext);
  // useEffect(() => {
  //   const animateElement = (_element: ITransition, index: number) => {
  //     setIndex(index + 1);
  //   };
  //   const reverseAnimation = (_element: ITransition, index: number) => {
  //     setIndex(index);
  //   };
  //   const createScrollTrigger = (element: ITransition, index: number) => {
  //     ScrollTrigger.create({
  //       markers: true,
  //       trigger: "." + element.section,
  //       start: "center 40%",
  //       end: "180% 90%",
  //       onEnter: () => {
  //         animateElement(element, index);
  //       },
  //       onLeaveBack: () => {
  //         reverseAnimation(element, index);
  //       },
  //     });
  //   };
  //   transitions.forEach((element, index) =>
  //     createScrollTrigger(element, index)
  //   );
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      <div className="custom-container">
        <section className="custom-section sub-section-1 px-28" id="section-1">
          <div className="flex-1 prose max-w-none text-5xl leading-[56px] text-center font-medium text-white opacity-100">
            La Maison Bourbon Vanille née à
            <i className="text-accent"> Madagascar </i> ,est un trésor rare
            niche dans un environnement naturel exceptionnellement luxueux.
          </div>
          <div className="flex-1"></div>
        </section>
        <section className="custom-section sub-section-2 px-28" id="section-2">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl leading-[56px] text-center font-medium text-white opacity-100 ">
            Notre artisanat de haute qualité repose sur les valeurs telles que
            <i className="text-accent">la passion </i> ,
            <i className="text-accent">la persévérance </i>
            et <i className="text-accent">la patience </i> , nous permettant de
            recueillir des gousses d'exception reflétant notre engagement
            éthique.
          </div>
        </section>
        <section className="custom-section sub-section-3 px-28" id="section-3">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl leading-[56px] text-center font-medium text-white opacity-100">
            Des producteurs locaux engagés pour une
            <i className="text-accent"> vanille de qualité supérieure</i>
            respectueuse de l'environnement et du commerce equitable.
          </div>
        </section>
        <section className="custom-section sub-section-4 px-28" id="section-4">
          <div className="flex-1"></div>
          <div className="flex-1 prose max-w-none text-5xl leading-[56px] text-center font-medium text-white opacity-100">
            <i className="text-accent">La vanille de Madagascar,</i> pour une
            expérience gustative inoubliable.
          </div>
        </section>
      </div>
    </>
  );
};
