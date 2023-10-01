import { motion, useAnimation } from "framer-motion";
import React, { RefObject, useEffect } from "react";
import { useInView } from "react-intersection-observer";
const boxVariant = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.5 } },
};
interface IProps {
  children: React.ReactNode;
  subSection: string;
}

export default function MobileSubSection({ children, subSection }: IProps) {
  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true }) as unknown as [
    RefObject<HTMLDivElement>,
    boolean,
  ];
  console.log(subSection);
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.div
      className={`custom-section-mobile playfair-display subsection flex h-96 w-full items-center text-2xl text-secondary`}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
}
