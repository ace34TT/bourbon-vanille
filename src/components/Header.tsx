import React, { useState } from "react";
import Logo from "./../assets/logo/logo_principal 1.png";
import { BiMenu } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header className="fixed top-0 z-50 ">
      <div className="h-24 w-screen flex justify-between items-center bg-primary px-10 relative py-10">
        <div></div>
        <Link to={"/"}>
          <img src={Logo} alt="" className="h-20" />
        </Link>
        <div>
          <BiMenu
            className={"text-secondary text-5xl cursor-pointer"}
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
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute top-0 left-0 px-5 w-screen bg-secondary "
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              exit={{ y: -1000 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center h-24 px-10 py-10">
                <div />
                <div>
                  <img src={Logo} alt="" className="h-20" />
                </div>
                <div>
                  <RxCross1
                    className={"text-primary text-4xl"}
                    onClick={() => setIsMenuVisible(false)}
                  />
                </div>
              </div>
              <nav className="flex items-center justify-around h-36 text-4xl text-primary font-normal">
                <Link
                  to={"/order"}
                  className="hover:text-complementary transition-colors duration-300"
                  onClick={() => setIsMenuVisible(false)}
                >
                  Commader
                </Link>
                <div className="w-px h-6 bg-complementary"></div>{" "}
                <Link
                  to={"/our-story"}
                  className="hover:text-complementary transition-colors duration-300"
                  onClick={() => setIsMenuVisible(false)}
                >
                  Notre histoire
                </Link>
                <div className="w-px h-6 bg-complementary"></div>{" "}
                <Link
                  to={"/contact"}
                  className="hover:text-complementary transition-colors duration-300"
                  onClick={() => setIsMenuVisible(false)}
                >
                  Contact
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
