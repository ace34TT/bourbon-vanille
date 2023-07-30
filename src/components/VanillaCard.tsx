interface IProps {
  image: string;
  name: string;
  price: number;
}
export const VanillaCard = ({ image, name, price }: IProps) => {
  return (
    <div className="lg:h-[490px] 2xl:h-[536px] w-80 bg-secondary rounded-2xl flex flex-col items-center relative pt-10 hover:scale-105 transition-transform duration-500 ">
      <div className="flex-grow flex flex-col items-center ">
        <img src={image} className=" lg:w-24 2xl:w-28" alt="" />
        <p className="text-3xl text-primary">{name}</p>
        <p className="playfair-display font-medium">15 - 16 cm</p>
      </div>
      <button className="absolute -bottom-6 border border-primary bg-secondary w-36 py-4 rounded-2xl hover:bg-primary hover:border-secondary hover:text-secondary transition-all duration-150 playfair-display">
        {price} €
      </button>
    </div>
  );
};
