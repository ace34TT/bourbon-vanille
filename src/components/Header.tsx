import { useContext, useState } from "react";
import Logo from "./../assets/logo/logo_principal 1.png";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { VscMenu } from "react-icons/vsc";
import { PageTransitionContext } from "../context/PageTransitionContext";
export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { handleAnimation } = useContext(PageTransitionContext);
  return (
    <header className="playfair-display fixed top-0 z-50 w-screen ">
      <div className=" relative flex h-20 w-screen items-center justify-between bg-primary px-10 py-5 lg:h-20 2xl:h-24">
        <div></div>
        <button onClick={() => handleAnimation("/")}>
          <img src={Logo} alt="" className="h-16 lg:h-16 2xl:h-20" />
        </button>
        <div>
          <VscMenu
            className={"cursor-pointer text-3xl text-secondary lg:text-4xl"}
            onClick={() => setIsMenuVisible(true)}
          />
        </div>
      </div>
      <AnimatePresence>
        {isMenuVisible && (
          <>
            <motion.div
              className={`fixed left-0 top-0 h-screen w-screen bg-black`}
              onClick={() => setIsMenuVisible(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: isMenuVisible ? 0.5 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute left-0 top-0 w-screen bg-secondary px-0 lg:px-5 "
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              exit={{ y: -1000 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-24 items-center justify-between px-10 py-10">
                <div />
                <div>
                  <img src={Logo} alt="" className="h-16 lg:h-16 2xl:h-20" />
                </div>
                <div>
                  <RxCross1
                    className={"text-4xl text-primary"}
                    onClick={() => setIsMenuVisible(false)}
                  />
                </div>
              </div>
              <nav className="flex h-64 flex-col items-center justify-around pb-10 text-2xl font-normal text-primary lg:h-28 lg:flex-row lg:items-center lg:justify-around lg:text-3xl 2xl:h-36 2xl:py-16 2xl:text-4xl">
                <button
                  className="playfair-display transition-colors duration-300 hover:text-complementary"
                  onClick={() => {
                    setIsMenuVisible(false);
                    handleAnimation("/order");
                  }}
                >
                  Commander
                </button>
                <div className="hidden h-6 w-1 bg-complementary lg:block" />
                <button
                  className="playfair-display transition-colors duration-300 hover:text-complementary"
                  onClick={() => {
                    setIsMenuVisible(false);
                    handleAnimation("/our-story");
                  }}
                >
                  Notre histoire
                </button>
                <div className="hidden h-6 w-1 bg-complementary lg:block" />
                <button
                  className="playfair-display transition-colors duration-300 hover:text-complementary"
                  onClick={() => {
                    setIsMenuVisible(false);
                    handleAnimation("/contact");
                  }}
                >
                  Contact
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
