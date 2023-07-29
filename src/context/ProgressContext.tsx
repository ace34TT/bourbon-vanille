import { FC, ReactNode, createContext, useEffect, useState } from "react";

interface IProgressContext {
  progress: number;
  setProgress: (value: number) => void;
}
interface IProgressContextProviderProps {
  children: ReactNode;
}

const ProgressContext = createContext<IProgressContext>({
  progress: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setProgress: () => {},
});
const ProgressProvider: FC<IProgressContextProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState<number>(0);
  const value: IProgressContext = { progress, setProgress };
  useEffect(() => {
    console.log(progress);
  }, [progress]);
  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
export { ProgressContext, ProgressProvider };
