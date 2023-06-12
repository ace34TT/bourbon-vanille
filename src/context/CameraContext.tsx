import { useState, ReactNode, useEffect } from "react";
import { createContext } from "react";

interface ICameraContext {
  position: [number, number, number];
  rotation: [number, number, number];
  setPosition: (value: [number, number, number]) => void;
  setRotation: (value: [number, number, number]) => void;
  //
}

const CameraContext = createContext<ICameraContext>({
  position: [1, 1.5, -3],
  rotation: [0, 0.65, -0.1],
  setPosition: () => {},
  setRotation: () => {},
});
interface ICameraContextProviderProps {
  children: ReactNode;
}

const CameraContextProvider: React.FC<ICameraContextProviderProps> = ({
  children,
}) => {
  const [position, setUpPosition] = useState<[number, number, number]>([
    1, 1.5, -3,
  ]);
  const [rotation, setRotation] = useState<[number, number, number]>([
    0, 0.65, -0.1,
  ]);
  const setPosition = (value: [number, number, number]) => {
    setUpPosition(value);
  };
  const contextValue: ICameraContext = {
    position,
    rotation,
    setPosition,
    setRotation,
  };

  return (
    <CameraContext.Provider value={contextValue}>
      {children}
    </CameraContext.Provider>
  );
};

export { CameraContext, CameraContextProvider };
