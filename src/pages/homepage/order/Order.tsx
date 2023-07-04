import "./style.scss";
import { VanillaCard } from "../../../components/VanillaCard";
import { Vanilla_m1 } from "../../../imports/vanille.import";
import { motion } from "framer-motion";
export const Order = () => {
  return (
    <div id="order">
      <section className="playfair-display mt-20 lg:mt-24 py-10 h-fit lg:h-48 flex items-center px-10 lg:px-60 text-xl bg-primary text-secondary text-center">
        En choisissant Bourbon Vanille, vous optez pour une vanille de qualité
        supérieure, respectueuse de l'environnement et de la responsabilité
        sociale, tout en soutenant une économie équitable et circulaire. Nous
        sommes ravis de vous faire découvrir notre univers, notre passion et
        notre engagement pour la vanille bourbon de Madagascar.
      </section>
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
    </div>
  );
};
