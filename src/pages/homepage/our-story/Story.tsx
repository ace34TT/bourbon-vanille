import "./style.scss";
import image_1 from "./../../../assets/backgrounds/1.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import SplitType from "split-type";
import { dec_1, dec_2, dec_3 } from "../../../imports/vanille.import";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import bg from "./../../../assets/backgrounds/istockphoto-1353766164-640_adpp_is.mp4";
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
  //

  return (
    <div id="story" className="mt-20 lg:mt-0 playfair-display">
      <section className="h-fit py-20 lg:h-screen flex flex-col items-center justify-center section-1 z-20 relative overflow-hidden">
        {/* <div className="video-overlay z-[1]"></div>
        <video
          className="absolute right-0 bottom-0 min-w-full min-h-full object-cover z-negative"
          autoPlay
          loop
          muted
        >
          <source src={bg} type="video/mp4" />
        </video> */}
        <div className="w-10/12 lg:w-6/12 prose max-w-none z-20">
          <h1
            className="reveal-text text-center text-secondary text-4xl lg:text-6xl font-medium"
            ref={textRef}
          >
            Laissez-vous transporter vers les contrées lointaines de Madagascar
            grâce
            <i className="text-accent"> à nos vanilles d'exception !</i>
          </h1>
          <motion.p
            className="text-center text-secondary text-lg"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -25, transition: { delay: 1.5 } }}
            transition={{ duration: 1 }}
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

      <section className="h-fit flex flex-col gap-10 py-24 w-screen bg-primary">
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
          <div className="flex-1  prose max-w-none text-secondary">
            <div className="w-10/12">
              {" "}
              <h1 className="text-secondary playfair-display font-normal">
                Lorem ipsum{" "}
                <i className="text-accent font-medium">dolor sit amet</i> ,
                consectetur adipisicing elit. Saepe similique.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                quidem optio aliquam repudiandae laudantium quibusdam officia,
                ducimus cumque repellendus, aperiam tempore illo quae nostrum
                laborum, delectus esse commodi excepturi? Dicta.
              </p>
            </div>
          </div>
        </div>
        <div className="h-fit py-20 bg-primary flex flex-col items-center justify-center">
          <div className="w-10/12 lg:w-6/12 prose max-w-none">
            <p className="text-justify text-secondary px-4 text-lg">
              Notre vanille bourbon est le fruit d'un partenariat étroit avec
              des producteurs locaux, qui ont un savoir-faire exceptionnel en
              matière de culture et de récolte de vanille. En utilisant des
              méthodes artisanales et respectueuses de l'environnement, ils
              garantissent une qualité de vanille supérieure, tout en préservant
              les ressources naturelles de Madagascar.
            </p>
            <div className="w-full flex flex-col lg:flex-row justify-around gap-0 lg:gap-4">
              <img src={image_1} className="w-[512px] mb-0" alt="" />
              <img src={image_1} className="w-[512px] mb-0" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="h-fit py-20 lg:h-screen bg-secondary flex flex-col items-center justify-center">
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
      <div className="flex justify-center bg-primary">
        <div className="w-1/2 bg-secondary h-px"></div>
      </div>
    </div>
  );
};
