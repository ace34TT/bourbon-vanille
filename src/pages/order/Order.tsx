import "./style.scss";
import { VanillaCard } from "../../components/VanillaCard";
import { Vanilla_m1 } from "../../imports/vanille.import";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
export const Order = () => {
  return (
    <div id="order">
      <Helmet>
        <title>Bourbon vanille - Commande</title>
      </Helmet>

      <section className="playfair-display flex h-fit items-center bg-primary px-10 pb-10 pt-20 text-left text-xl text-secondary lg:pt-28 2xl:px-60">
        En choisissant Bourbon Vanille, vous optez pour une vanille de qualité
        supérieure, respectueuse de l'environnement et de la responsabilité
        sociale, tout en soutenant une économie équitable et circulaire. Nous
        sommes ravis de vous faire découvrir notre univers, notre passion et
        notre engagement pour la vanille bourbon de Madagascar.
      </section>
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
    </div>
  );
};
