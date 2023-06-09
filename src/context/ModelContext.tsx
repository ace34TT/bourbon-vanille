import { useState, ReactNode } from "react";
import { createContext } from "react";

interface IModelContext {
  position: [number, number, number];
  rotation: [number, number, number];
  setPosition: (value: [number, number, number]) => void;
  setRotation: (value: [number, number, number]) => void;
  //
}

const ModelContext = createContext<IModelContext>({
  position: [1, 1.5, -2],
  rotation: [1, 0, -0.09],
  setPosition: () => {},
  setRotation: () => {},
});
interface IModelContextProviderProps {
  children: ReactNode;
}

const ModelContextProvider: React.FC<IModelContextProviderProps> = ({
  children,
}) => {
  const [position, setPosition] = useState<[number, number, number]>([
    0.03, 1.32, -0.05,
  ]);
  const [rotation, setRotation] = useState<[number, number, number]>([
    0, 0.65, -3.13,
  ]);
  const contextValue: IModelContext = {
    position,
    rotation,
    setPosition,
    setRotation,
  };

  return (
    <ModelContext.Provider value={contextValue}>
      {children}
    </ModelContext.Provider>
  );
};

export { ModelContext, ModelContextProvider };
