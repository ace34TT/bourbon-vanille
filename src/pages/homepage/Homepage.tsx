import { TransitionContextProvider } from "../../context/TransitionContext";
import MainSection from "./main-section/MainSection";

import { BrowserView, MobileView } from "react-device-detect";
import { Vanilla_m1 } from "../../imports/vanille.import";
// import "./main-section/style.css";
import MobileSubSection from "../../components/MobileSubSection";
import { motion } from "framer-motion";
import { VanillaCard } from "../../components/VanillaCard";
import { mp4_bg } from "../../imports/background.import";
import { Loader } from "../../components/loader/Loader";

export default function Homepage() {
  return (
    <div>
      <Loader></Loader>
      <BrowserView>
        <TransitionContextProvider>
          <MainSection />
          <section className="py-20 section-2 flex flex-col lg:flex-row justify-center items-center gap-20">
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
          <section className="h-fit py-20  bg-primary flex flex-col items-center justify-center">
            <div className="w-10/12 lg:w-8/12 prose max-w-none flex flex-col lg:flex-row items-center gap-20">
              <p className="text-secondary text-justify flex-1 text-lg">
                Enfin, nous sommes convaincus que l'éthique professionnelle est
                la clé de notre réussite. Nous agissons avec transparence et
                honnêteté envers nos clients, nos partenaires et nos employés.
                Nous avons à cœur de maintenir des relations solides et durables
                avec tous les acteurs de notre chaîne de valeur.
              </p>
              <div className="flex-1 w-full h-[400px] relative bg-secondary">
                <video
                  className="absolute left-5 top-5 min-w-full min-h-full object-cover z-[19] p-0 m-0"
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
      {/* <MobileView>
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
      </MobileView> */}
    </div>
  );
}
