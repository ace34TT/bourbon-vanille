import React from "react";
import "./style.scss";
import { VanillaCard } from "../../../components/VanillaCard";
import {
  Vanilla_m1,
  Vanilla_m2,
  Vanilla_m3,
} from "../../../imports/vanille.import";
export const Order = () => {
  return (
    <div id="order">
      <section className="mt-20 lg:mt-24 py-10 h-fit lg:h-80 flex items-center px-10 lg:px-72 text-xl bg-primary text-secondary text-center">
        En choisissant Bourbon Vanille, vous optez pour une vanille de qualité
        supérieure, respectueuse de l'environnement et de la responsabilité
        sociale, tout en soutenant une économie équitable et circulaire. Nous
        sommes ravis de vous faire découvrir notre univers, notre passion et
        notre engagement pour la vanille bourbon de Madagascar.
      </section>
      <section className="py-20 section-2 flex flex-col lg:flex-row justify-center items-center gap-20">
        <VanillaCard image={Vanilla_m1} name={"10 Vanilles"} price={30} />
        <VanillaCard image={Vanilla_m1} name={"30 Vanilles"} price={75} />
        <VanillaCard image={Vanilla_m1} name={"50 Vanilles"} price={99} />
      </section>
    </div>
  );
};
