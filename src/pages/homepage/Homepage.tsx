import { TransitionContextProvider } from "../../context/TransitionContext";
import MainSection from "./main-section/MainSection";

import { BrowserView, MobileView } from "react-device-detect";
import { Vanilla_m1 } from "../../imports/vanille.import";
import { motion } from "framer-motion";
import { VanillaCard } from "../../components/VanillaCard";
import { mp4_bg } from "../../imports/background.import";
import MobileSubSection from "../../components/MobileSubSection";
import "./style.css";
import { Helmet } from "react-helmet";
export default function Homepage() {
  return (
    <div>
      <Helmet>
        <title>Bourbon vanille - Accueil</title>
      </Helmet>
      <BrowserView>
        <TransitionContextProvider>
          <MainSection />
          <section className="section-2 flex flex-col items-center justify-center gap-20 py-20 lg:flex-row">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.75, delay: 0 },
              }}
            >
              <VanillaCard image={Vanilla_m1} name={"10 Vanilles"} price={30} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.75, delay: 0.25 },
              }}
            >
              <VanillaCard image={Vanilla_m1} name={"30 Vanilles"} price={75} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.751, delay: 0.5 },
              }}
            >
              <VanillaCard image={Vanilla_m1} name={"50 Vanilles"} price={99} />
            </motion.div>
          </section>
          <section className="flex h-fit  flex-col items-center justify-center bg-primary py-20">
            <div className="prose flex w-10/12 max-w-none flex-col items-center gap-20 lg:w-8/12 lg:flex-row">
              <p className="flex-1 text-justify text-lg text-secondary">
                Enfin, nous sommes convaincus que l'éthique professionnelle est
                la clé de notre réussite. Nous agissons avec transparence et
                honnêteté envers nos clients, nos partenaires et nos employés.
                Nous avons à cœur de maintenir des relations solides et durables
                avec tous les acteurs de notre chaîne de valeur.
              </p>
              <div className="relative h-[400px] w-full flex-1 bg-secondary">
                <video
                  className="absolute left-5 top-5 z-[19] m-0 min-h-full min-w-full object-cover p-0"
                  autoPlay
                  loop
                  muted
                >
                  <source src={mp4_bg} type="video/mp4" />
                </video>
              </div>
            </div>
          </section>
        </TransitionContextProvider>
      </BrowserView>
      <MobileView>
        <section className="mt-20 flex h-fit flex-col items-center justify-between bg-primary px-10 py-10">
          <span className="playfair-display text-center text-2xl leading-snug text-secondary">
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
              <i className="text-accent"> Madagascar</i> , est un trésor rare
              niche dans un environnement naturel exceptionnellement luxueux.
            </p>
          </MobileSubSection>
          <MobileSubSection subSection={"2"}>
            <p className="text-center">
              Notre artisanat de haute qualité repose sur les valeurs telles que{" "}
              <i className="text-accent">la passion</i> ,{" "}
              <i className="text-accent">la persévérance</i> et{" "}
              <i className="text-accent">la patience</i> , nous permettant de
              recueillir des gousses d'exception reflétant notre engagement
              éthique.
            </p>
          </MobileSubSection>
          <MobileSubSection subSection={"3"}>
            <p className="text-center">
              Des producteurs locaux engagés pour une
              <i className="text-accent"> vanille de qualité supérieure</i>{" "}
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
