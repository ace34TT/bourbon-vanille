import { TransitionContextProvider } from "../../context/TransitionContaxt";
import MainSection from "./main-section/MainSection";

import { BrowserView, MobileView } from "react-device-detect";
import { Vanilla_m1 } from "../../imports/vanille.import";
import "./main-section/style.css";
import MobileSubSection from "../../components/MobileSubSection";
export default function Homepage() {
  return (
    <div>
      <BrowserView>
        <TransitionContextProvider>
          <MainSection />
        </TransitionContextProvider>
      </BrowserView>
      <MobileView>
        <section className="h-fit mt-20 flex flex-col items-center justify-between bg-primary py-10">
          <span className="text-center text-3xl text-secondary playfair-display">
            Découvrez notre gamme de{" "}
            <span className="text-accent">vanilles d'exception</span> , avec des
            gousses parfumées
          </span>
          <img src={Vanilla_m1} className="w-48" alt="" />
        </section>
        <section>
          <MobileSubSection subSection={"1"}>
            <p className="text-center">
              La Maison Bourbon Vanille née à
              <i className="text-accent"> Madagascar</i> ,est un trésor rare
              niche dans un environnement naturel exceptionnellement luxueux.
            </p>
          </MobileSubSection>
          <MobileSubSection subSection={"2"}>
            <p className="text-center">
              Notre artisanat de haute qualité repose sur les valeurs telles que
              <i className="text-accent">la passion</i> ,
              <i className="text-accent">la persévérance</i>
              et <i className="text-accent">la patience</i> , nous permettant de
              recueillir des gousses d'exception reflétant notre engagement
              éthique.
            </p>
          </MobileSubSection>
          <MobileSubSection subSection={"3"}>
            <p className="text-center">
              Des producteurs locaux engagés pour une
              <i className="text-accent"> vanille de qualité supérieure</i>
              respectueuse de l'environnement et du commerce equitable.
            </p>
          </MobileSubSection>
          <MobileSubSection subSection={"4"}>
            <p className="text-center">
              <i className="text-accent">La vanille de Madagascar,</i> pour une
              expérience gustative inoubliable.
            </p>
          </MobileSubSection>
        </section>
      </MobileView>
    </div>
  );
}
