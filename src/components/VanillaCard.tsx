import React from "react";

interface IProps {
  image: string;
  name: string;
  price: number;
}
export const VanillaCard = ({ image, name, price }: IProps) => {
  return (
    <div className="h-[536px] w-80 bg-secondary rounded-2xl flex flex-col items-center relative pt-10 hover:scale-105 transition-transform duration-500 ">
      <div className="flex-grow flex flex-col items-center ">
        <img src={image} className="w-28" alt="" />
        <p className="text-3xl font-light">{name}</p>
        <p>15 - 16 cm</p>
      </div>
      <button className="absolute -bottom-6 border border-primary bg-secondary w-36 py-4 rounded-2xl hover:bg-primary hover:text-secondary transition-all duration-150">
        {price} €
      </button>
    </div>
  );
};
