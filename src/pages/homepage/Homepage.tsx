import { TransitionContextProvider } from "../../context/TransitionContaxt";
import MainSection from "./MainSection/MainSection";
import Purchase from "./Purchase";

export default function Prototype() {
  return (
    <div>
      <TransitionContextProvider>
        <MainSection />
      </TransitionContextProvider>
      <Purchase />
    </div>
  );
}
