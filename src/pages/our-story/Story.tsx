import "./style.scss";
import image_1 from "../../assets/backgrounds/1.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import SplitType from "split-type";
import { dec_1, dec_2, dec_3 } from "../../imports/vanille.import";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import bg from "../../assets/backgrounds/istockphoto-1353766164-640_adpp_is.mp4";
import { FadeInComponent } from "../../components/animation/FadeInComponent";
import { bg_1, bg_2 } from "../../imports/background.import";
import { BrowserView, isBrowser } from "react-device-detect";
import { Helmet } from "react-helmet";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [activeImage, setActiveImage] = useState(0);
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
          // markers: true,
          trigger: section3Ref.current,
          start: "50% bottom",
          end: "bottom bottom",
          scrub: true,
        },
      },
    );
  }, []);
  return (
    <div id="story" className="playfair-display pt-20 lg:mt-0">
      <Helmet>
        <title>Bourbon vanille - Notre histoire</title>
      </Helmet>
      <section className="section-1 relative z-20 flex  h-screen flex-col items-center justify-center overflow-hidden py-20">
        <div className="prose z-20 w-10/12 max-w-none lg:w-6/12">
          <h1
            className="reveal-text playfair-display text-center text-3xl font-medium  text-secondary md:text-5xl 2xl:text-6xl"
            ref={textRef}
          >
            Laissez-vous transporter vers les contrées lointaines de Madagascar
            grâce
            <i className="text-accent"> à nos vanilles d'exception !</i>
          </h1>
          <motion.p
            className="playfair-display text-center text-base text-secondary md:text-lg "
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
      <section className="relative flex h-fit w-screen flex-col gap-10 bg-primary py-20 lg:py-24">
        <div className="absolute left-0 top-0 z-[11] h-full w-full bg-primary opacity-75"></div>
        <AnimatePresence mode="wait">
          {/* {activeImage === 1 && (
            <motion.div
              className="absolute left-0 top-0 z-10 h-full w-full"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={bg_1} className="h-full w-full object-cover" alt="" />
            </motion.div>
          )}
          {activeImage === 2 && (
            <motion.div
              className="absolute left-0 top-0 z-10 h-full w-full"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img src={bg_2} className="h-full w-full object-cover" alt="" />
            </motion.div>
          )} */}
        </AnimatePresence>
        {/*  */}
        <div className="z-20">
          <BrowserView>
            <div className="flex items-center gap-10">
              <div className="flex flex-1 justify-center">
                <div className="relative h-[500px] w-[350px] bg-secondary">
                  <Parallax speed={-2}>
                    <img
                      src={dec_1}
                      className="absolute -left-14 top-6 w-64"
                      alt=""
                    />
                  </Parallax>
                  <Parallax speed={-3}>
                    <img
                      src={dec_2}
                      className="absolute -right-32 top-20 w-56"
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
              <div className="prose max-w-none flex-1 text-secondary">
                <div className="w-10/12">
                  <Parallax speed={2}>
                    <FadeInComponent>
                      <h1 className="playfair-display font-normal text-secondary">
                        La Maison Vanille Bourbon né à{" "}
                        <i className="playfair-display font-medium text-accent">
                          {" "}
                          Madagascar{" "}
                        </i>{" "}
                      </h1>
                    </FadeInComponent>
                    <FadeInComponent>
                      <p className="playfair-display text-base md:text-lg">
                        Notre artisanat de haute qualité repose sur des valeurs
                        telles que la passion, la persévérance et la patience,
                        nous permettant de recueillir des gousses d'exception
                        reflétant notre engagement éthique.
                      </p>
                    </FadeInComponent>
                  </Parallax>
                </div>
              </div>
            </div>
          </BrowserView>
          <div className="flex h-fit flex-col items-center justify-center pt-0 lg:pt-20">
            <div className="prose w-10/12 max-w-none lg:w-6/12">
              <FadeInComponent>
                <p className="playfair-display px-4 text-justify text-base text-secondary md:text-lg">
                  Notre vanille bourbon est le fruit d'un partenariat étroit
                  avec des producteurs locaux, qui ont un savoir-faire
                  exceptionnel en matière de culture et de récolte de vanille.
                  En utilisant des méthodes artisanales et respectueuses de
                  l'environnement, ils garantissent une qualité de vanille
                  supérieure, tout en préservant les ressources naturelles de
                  Madagascar.
                </p>
              </FadeInComponent>
              <div className="flex w-full flex-col justify-around gap-0 lg:flex-row lg:gap-10">
                <img
                  src={bg_1}
                  className="mb-0 w-[512px] rounded-2xl"
                  alt=""
                  // onMouseEnter={() => setActiveImage(1)}
                  // onMouseLeave={() => setActiveImage(0)}
                />
                <img
                  src={bg_2}
                  className="mb-0 w-[512px] rounded-2xl"
                  alt=""
                  // onMouseEnter={() => setActiveImage(2)}
                  // onMouseLeave={() => setActiveImage(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrowserView>
        <section
          className="prose relative flex h-screen max-w-none items-center justify-center gap-[500px] bg-secondary "
          ref={section3Ref}
        >
          <div className="relative -top-16 w-60 text-right">
            <h1 className="font-normal">
              Notre vanille, une invitation au voyage gustatif dans les terres
              de Madagascar.
            </h1>
          </div>
          <div className="relative top-16 w-60 text-left">
            <h1 className="font-normal">
              Découvrez la vanille bourbon de Madagascar, une saveur exquise
              pour sublimer tous vos plats !
            </h1>
          </div>
          <div
            ref={section3ImgRef}
            className="absolute left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-[200px]"
          >
            <div className="relative h-full w-full">
              <div className="absolute left-0 top-0 h-full w-full bg-primary opacity-70"></div>
              <video
                className="z-[19] m-0 min-h-full min-w-full object-cover p-0"
                autoPlay
                loop
                muted
              >
                <source src={bg} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>
      </BrowserView>
      <section className="flex h-fit flex-col items-center justify-start bg-secondary py-0 lg:pb-20 2xl:h-fit">
        <div className="prose flex w-10/12 max-w-none flex-col items-center lg:w-8/12">
          <p className="px-4 text-justify text-lg text-primary">
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
      <section className="flex h-fit flex-col items-center justify-center bg-primary py-20 lg:py-20">
        <div className="prose flex w-10/12 max-w-none flex-col items-center gap-20 lg:w-8/12 lg:flex-row">
          <p className="flex-1 text-justify text-lg text-secondary">
            Enfin, nous sommes convaincus que l'éthique professionnelle est la
            clé de notre réussite. Nous agissons avec transparence et honnêteté
            envers nos clients, nos partenaires et nos employés. Nous avons à
            cœur de maintenir des relations solides et durables avec tous les
            acteurs de notre chaîne de valeur.
          </p>
          {isBrowser && (
            <div className="relative h-[400px] w-full flex-1 bg-secondary ">
              {/* <div className="video-overlay z-20 "></div> */}
              <video
                className="absolute left-5 top-5 z-[19] m-0 min-h-full min-w-full object-cover p-0"
                autoPlay
                loop
                muted
              >
                <source src={bg} type="video/mp4" />
              </video>
            </div>
          )}

          {/* <img src={image_1} className="w-full lg:h-[400px] flex-1" alt="" /> */}
        </div>
      </section>
    </div>
  );
};
