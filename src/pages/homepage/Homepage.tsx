import { TransitionContextProvider } from "../../context/TransitionContaxt";
import MainSection from "./main-section/MainSection";
import purchaseBG from "./../../assets/backgrounds/6.jpg";
export default function Homepage() {
  return (
    <div>
      <TransitionContextProvider>
        <MainSection />
      </TransitionContextProvider>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(${purchaseBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
}
