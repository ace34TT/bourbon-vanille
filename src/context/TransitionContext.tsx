import { useState, ReactNode } from "react";
import { createContext } from "react";

interface ITransitionContext {
  index: number;
  setIndex: (value: number) => void;
  //
}

const TransitionContext = createContext<ITransitionContext>({
  index: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIndex: () => {},
});
interface ITransitionContextProviderProps {
  children: ReactNode;
}

const TransitionContextProvider: React.FC<ITransitionContextProviderProps> = ({
  children,
}) => {
  const [index, setIndex] = useState<number>(0);
  const contextValue: ITransitionContext = {
    index,
    setIndex,
  };

  return (
    <TransitionContext.Provider value={contextValue}>
      {children}
    </TransitionContext.Provider>
  );
};

export { TransitionContext, TransitionContextProvider };
