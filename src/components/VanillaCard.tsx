import { useContext } from "react";
import { PageTransitionContext } from "../context/PageTransitionContext";

interface IProps {
  image: string;
  name: string;
  price: number;
}

export const VanillaCard = ({ image, name, price }: IProps) => {
  const { handleAnimation } = useContext(PageTransitionContext);
  return (
    <div
      className="relative flex h-[428px] w-80 flex-col items-center rounded-2xl bg-secondary pt-10 transition-transform duration-500 hover:scale-105 lg:h-[490px] 2xl:h-[536px] "
      onClick={() => handleAnimation(`/contact?product=${name}&price=${price}`)}
    >
      <div className="flex flex-grow flex-col items-center ">
        <img src={image} className="w-20 lg:w-24 2xl:w-28" alt="" />
        <p className="text-3xl text-primary">{name}</p>
        <p className="playfair-display font-medium">15 - 16 cm</p>
      </div>
      <button className="playfair-display absolute -bottom-6 w-36 rounded-2xl border border-primary bg-secondary py-4 transition-all duration-150 hover:border-secondary hover:bg-primary hover:text-secondary">
        {price} €
      </button>
    </div>
  );
};
