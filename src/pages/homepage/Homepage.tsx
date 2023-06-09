import { CameraContextProvider } from "../../context/CameraContext";
import { ModelContextProvider } from "../../context/ModelContext";
import MainSection from "./MainSection/MainSection";

export default function Prototype() {
  return (
    <div>
      <ModelContextProvider>
        <CameraContextProvider>
          <MainSection />
        </CameraContextProvider>
      </ModelContextProvider>
    </div>
  );
}
