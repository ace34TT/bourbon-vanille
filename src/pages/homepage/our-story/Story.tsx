import React from "react";
import "./style.scss";
import image_1 from "./../../../assets/backgrounds/1.jpg";
export const Story = () => {
  return (
    <div id="story">
      <section className="h-screen flex flex-col items-center justify-center section-1">
        <div className="w-6/12 prose max-w-none">
          <h1 className="text-center text-secondary text-6xl ">
            Laissez-vous transporter vers les contrées lointaines de Madagascar
            grâce <i className="text-accent">à nos vanilles d'exception !</i>
          </h1>
          <p className="text-justify text-secondary ">
            Bienvenue chez Bourbon Vanille, une entreprise passionnée par la
            vanille bourbon de Madagascar, cette épice rare et prestigieuse dont
            la qualité et la saveur ne sont plus à démontrer. Nous sommes
            convaincus que le succès de notre entreprise repose sur trois
            piliers essentiels : l'engagement envers la qualité, la
            responsabilité environnementale et sociale et l'éthique
            professionnelle.
          </p>
        </div>
      </section>
      <section className="h-screen bg-primary flex flex-col items-center justify-center">
        <div className="w-6/12 prose max-w-none">
          <p className="text-justify text-secondary px-4">
            Notre vanille bourbon est le fruit d'un partenariat étroit avec des
            producteurs locaux, qui ont un savoir-faire exceptionnel en matière
            de culture et de récolte de vanille. En utilisant des méthodes
            artisanales et respectueuses de l'environnement, ils garantissent
            une qualité de vanille supérieure, tout en préservant les ressources
            naturelles de Madagascar.
          </p>
          <div className="w-full flex justify-around gap-4">
            <img src={image_1} className="w-[512px]" alt="" />
            <img src={image_1} className="w-[512px]" alt="" />
          </div>
        </div>
      </section>
      <section className="h-screen bg-secondary flex flex-col items-center justify-center">
        <div className="w-8/12 prose max-w-none flex flex-col items-center">
          <p className="text-justify text-primary px-4">
            Nous croyons également que notre engagement doit s'étendre au-delà
            de la qualité de notre produit. Nous sommes fiers de soutenir des
            initiatives qui favorisent le développement économique des
            communautés locales, notamment en garantissant des conditions de
            travail équitables et en participant à des programmes de formation
            professionnelle pour les agriculteurs.
          </p>
          <img src={image_1} className="h-[600px]" alt="" />
        </div>
      </section>
      <section className="flex bg-primary justify-center items-center gap-10 px-52 py-16">
        <div>
          <p className="text-secondary text-justify">
            Enfin, nous sommes convaincus que l'éthique professionnelle est la
            clé de notre réussite. Nous agissons avec transparence et honnêteté
            envers nos clients, nos partenaires et nos employés. Nous avons à
            cœur de maintenir des relations solides et durables avec tous les
            acteurs de notre chaîne de valeur.
          </p>
        </div>
        <img src={image_1} className="h-96" alt="" />
      </section>
      <div className="flex justify-center bg-primary">
        <div className="w-1/2 bg-secondary h-px"></div>
      </div>
    </div>
  );
};
