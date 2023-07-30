import "./style.scss";
import image_1 from "../../assets/backgrounds/1.jpg";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import SplitType from "split-type";
import { dec_1, dec_2, dec_3 } from "../../imports/vanille.import";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import bg from "../../assets/backgrounds/istockphoto-1353766164-640_adpp_is.mp4";
import { FadeInComponent } from "../../components/animation/FadeInComponent";
import { bg_1, bg_2 } from "../../imports/background.import";
gsap.registerPlugin(ScrollTrigger);
export const Story = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    if (textRef.current) {
      const split = new SplitType(textRef.current, { types: "words" });
      gsap.from(split.words, {
        y: "100%",
        opacity: 0,
        stagger: {
          each: 0.1,
        },
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, []);
  // section 2 interaction
  const [activeImage, setActiveImage] = useState(0);
  // section 3
  const section3Ref = useRef<HTMLElement | null>(null);
  const section3ImgRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.fromTo(
      section3ImgRef.current,
      { height: "100vh", borderRadius: "0px" },
      {
        height: "600px",
        width: "400px",
        borderRadius: "250px",
        scrollTrigger: {
          markers: true,
          trigger: section3Ref.current,
          start: "50% bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div id="story" className="mt-20 lg:mt-0 playfair-display">
      <section className="h-fit py-20 lg:h-screen flex flex-col items-center justify-center section-1 z-20 relative overflow-hidden">
        <div className="w-10/12 lg:w-6/12 prose max-w-none z-20">
          <h1
            className="reveal-text text-center text-secondary text-4xl lg:text-6xl font-medium playfair-display"
            ref={textRef}
          >
            Laissez-vous transporter vers les contrées lointaines de Madagascar
            grâce
            <i className="text-accent"> à nos vanilles d'exception !</i>
          </h1>
          <motion.p
            className="text-center text-secondary text-lg playfair-display"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -25, transition: { delay: 1.5 } }}
            transition={{ duration: 2 }}
          >
            Bienvenue chez Bourbon Vanille, une entreprise passionnée par la
            vanille bourbon de Madagascar, cette épice rare et prestigieuse dont
            la qualité et la saveur ne sont plus à démontrer. Nous sommes
            convaincus que le succès de notre entreprise repose sur trois
            piliers essentiels : l'engagement envers la qualité, la
            responsabilité environnementale et sociale et l'éthique
            professionnelle.
          </motion.p>
        </div>
      </section>
      <section className="h-fit flex flex-col gap-10 py-24 w-screen bg-primary relative">
        <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-75 z-[11]"></div>
        <AnimatePresence mode="wait">
          {activeImage === 1 && (
            <motion.div
              className="w-full h-full absolute top-0 left-0 z-10"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={bg_1} className="w-full h-full object-cover" alt="" />
            </motion.div>
          )}
          {activeImage === 2 && (
            <motion.div
              className="w-full h-full absolute top-0 left-0 z-10"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={bg_2} className="w-full h-full object-cover" alt="" />
            </motion.div>
          )}
        </AnimatePresence>
        {/*  */}
        <div className="z-20">
          <div className="flex  gap-10 items-center">
            <div className="flex-1 flex justify-center">
              <div className="bg-secondary w-[350px] h-[500px] relative">
                <Parallax speed={-2}>
                  <img
                    src={dec_1}
                    className="absolute top-6 -left-14 w-64"
                    alt=""
                  />
                </Parallax>
                <Parallax speed={-3}>
                  <img
                    src={dec_2}
                    className="absolute top-20 -right-32 w-56"
                    alt=""
                  />
                </Parallax>
                <img
                  src={dec_3}
                  className="absolute -bottom-10 -right-24 w-56"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-1 prose max-w-none text-secondary">
              <div className="w-10/12">
                <Parallax speed={2}>
                  <FadeInComponent>
                    <h1 className="text-secondary playfair-display font-normal">
                      Lorem ipsum{" "}
                      <i className="text-accent font-medium playfair-display">
                        dolor sit amet
                      </i>{" "}
                      , consectetur adipisicing elit. Saepe similique.
                    </h1>
                  </FadeInComponent>
                  <FadeInComponent>
                    <p className="text-lg playfair-display">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea quidem optio aliquam repudiandae laudantium quibusdam
                      officia, ducimus cumque repellendus, aperiam tempore illo
                      quae nostrum laborum, delectus esse commodi excepturi?
                      Dicta.
                    </p>
                  </FadeInComponent>
                </Parallax>
              </div>
            </div>
          </div>
          <div className="h-fit py-20 flex flex-col items-center justify-center">
            <div className="w-10/12 lg:w-6/12 prose max-w-none">
              <FadeInComponent>
                <p className="text-justify text-secondary px-4 text-lg playfair-display">
                  Notre vanille bourbon est le fruit d'un partenariat étroit
                  avec des producteurs locaux, qui ont un savoir-faire
                  exceptionnel en matière de culture et de récolte de vanille.
                  En utilisant des méthodes artisanales et respectueuses de
                  l'environnement, ils garantissent une qualité de vanille
                  supérieure, tout en préservant les ressources naturelles de
                  Madagascar.
                </p>
              </FadeInComponent>
              <div className="w-full flex flex-col lg:flex-row justify-around gap-0 lg:gap-10">
                <img
                  src={image_1}
                  className="w-[512px] mb-0 rounded-2xl"
                  alt=""
                  onMouseEnter={() => setActiveImage(1)}
                  onMouseLeave={() => setActiveImage(0)}
                />
                <img
                  src={bg_2}
                  className="w-[512px] mb-0 rounded-2xl"
                  alt=""
                  onMouseEnter={() => setActiveImage(2)}
                  onMouseLeave={() => setActiveImage(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="h-fit lg:h-screen bg-secondary flex items-center justify-center gap-[500px] relative prose max-w-none"
        ref={section3Ref}
      >
        <div className="w-60 text-right relative -top-16">
          <h1 className="font-normal">
            Lorem ipsum dolor sit amet , consectetur adipisicing elit. Saepe
            similique.
          </h1>
        </div>
        <div className="w-60 text-left relative top-16">
          <h1 className="font-normal">
            Lorem ipsum dolor sit amet , consectetur adipisicing elit. Saepe
            similique.
          </h1>
        </div>
        <div
          ref={section3ImgRef}
          className="w-screen h-screen overflow-hidden rounded-[200px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-70"></div>
            <video
              className="min-w-full min-h-full object-cover z-[19] p-0 m-0"
              autoPlay
              loop
              muted
            >
              <source src={bg} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="h-fit pb-20 lg:h-screen bg-secondary flex flex-col items-center justify-center">
        <div className="w-10/12 lg:w-8/12 prose max-w-none flex flex-col items-center">
          <p className="text-justify text-primary px-4 text-lg">
            Nous croyons également que notre engagement doit s'étendre au-delà
            de la qualité de notre produit. Nous sommes fiers de soutenir des
            initiatives qui favorisent le développement économique des
            communautés locales, notamment en garantissant des conditions de
            travail équitables et en participant à des programmes de formation
            professionnelle pour les agriculteurs.
          </p>
          <img src={image_1} className="w-full lg:h-[600px]" alt="" />
        </div>
      </section>
      <section className="h-fit py-20  bg-primary flex flex-col items-center justify-center">
        <div className="w-10/12 lg:w-8/12 prose max-w-none flex flex-col lg:flex-row items-center gap-20">
          <p className="text-secondary text-justify flex-1 text-lg">
            Enfin, nous sommes convaincus que l'éthique professionnelle est la
            clé de notre réussite. Nous agissons avec transparence et honnêteté
            envers nos clients, nos partenaires et nos employés. Nous avons à
            cœur de maintenir des relations solides et durables avec tous les
            acteurs de notre chaîne de valeur.
          </p>
          <div className="flex-1 w-full h-[400px] relative bg-secondary">
            {/* <div className="video-overlay z-20 "></div> */}
            <video
              className="absolute left-5 top-5 min-w-full min-h-full object-cover z-[19] p-0 m-0"
              autoPlay
              loop
              muted
            >
              <source src={bg} type="video/mp4" />
            </video>
          </div>
          {/* <img src={image_1} className="w-full lg:h-[400px] flex-1" alt="" /> */}
        </div>
      </section>
    </div>
  );
};
