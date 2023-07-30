import { useState, ReactNode } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

interface IPageTransition {
  animationState: number;
  setAnimationState: (value: number) => void;
  handleAnimation: (url: string) => void;
  zIndex: string;
  setZIndex: (value: string) => void;
}

const PageTransitionContext = createContext<IPageTransition>({
  animationState: 0,
  setAnimationState: () => {
    // This is a placeholder function. It will be replaced by the actual setAnimationState function in the provider.
  },
  handleAnimation: () => {
    //
  },
  zIndex: "99",
  setZIndex: () => {
    //
  },
});
interface IPageTransitionContextProviderProps {
  children: ReactNode;
}

const PageTransitionContextProvider: React.FC<
  IPageTransitionContextProviderProps
> = ({ children }) => {
  const [animationState, setAnimationState] = useState<number>(0);
  const [zIndex, setZIndex] = useState<string>("99");
  const navigate = useNavigate();
  const handleAnimation = (forwardUrl: string) => {
    setAnimationState(1);
    const timer2 = setTimeout(() => {
      setAnimationState(2);
      navigate(forwardUrl);
    }, 1000);
    const timer3 = setTimeout(() => {
      setAnimationState(0);
    }, 2000);
    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  const contextValue: IPageTransition = {
    animationState,
    setAnimationState,
    handleAnimation,
    zIndex,
    setZIndex,
  };
  return (
    <PageTransitionContext.Provider value={contextValue}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export { PageTransitionContext, PageTransitionContextProvider };
