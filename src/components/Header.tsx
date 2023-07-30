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
    <header className="fixed top-0 playfair-display z-50 w-screen">
      <div className="h-20 lg:h-24 w-screen flex justify-between items-center bg-primary px-10 relative">
        <div></div>
        <button onClick={() => handleAnimation("/")}>
          <img src={Logo} alt="" className="h-16 lg:h-20" />
        </button>
        <div>
          <VscMenu
            className={"text-secondary text-3xl lg:text-4xl cursor-pointer"}
            onClick={() => setIsMenuVisible(true)}
          />
        </div>
      </div>
      <AnimatePresence>
        {isMenuVisible && (
          <>
            <motion.div
              className={`fixed top-0 left-0 w-screen h-screen bg-black`}
              onClick={() => setIsMenuVisible(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: isMenuVisible ? 0.5 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute top-0 left-0 px-0 lg:px-5 w-screen bg-secondary "
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              exit={{ y: -1000 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-between items-center h-24 px-10 py-10">
                <div />
                <div>
                  <img src={Logo} alt="" className="h-16 lg:h-20" />
                </div>
                <div>
                  <RxCross1
                    className={"text-primary text-4xl"}
                    onClick={() => setIsMenuVisible(false)}
                  />
                </div>
              </div>
              <nav className="flex flex-col lg:flex-row justify-between items-center lg:items-center lg:justify-around h-80 py-16 lg:h-36 text-4xl text-primary font-normal">
                <button
                  // to={"/order"}
                  className="hover:text-complementary transition-colors duration-300 playfair-display"
                  onClick={() => {
                    setIsMenuVisible(false);
                    handleAnimation("/order");
                  }}
                >
                  Commader
                </button>
                <div className="hidden lg:block w-1 h-6 bg-complementary" />
                <button
                  // to={"/our-story"}
                  className="hover:text-complementary transition-colors duration-300 playfair-display"
                  onClick={() => {
                    setIsMenuVisible(false);
                    handleAnimation("/our-story");
                  }}
                >
                  Notre histoire
                </button>
                <div className="hidden lg:block w-1 h-6 bg-complementary" />
                <button
                  // to={"/contact"}
                  className="hover:text-complementary transition-colors duration-300 playfair-display"
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
