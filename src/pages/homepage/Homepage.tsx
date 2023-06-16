import { TransitionContextProvider } from "../../context/TransitionContaxt";
import MainSection from "./MainSection/MainSection";

export default function Prototype() {
  return (
    <div>
      <TransitionContextProvider>
        <MainSection />
      </TransitionContextProvider>
    </div>
  );
}
