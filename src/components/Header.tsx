import React, { useState } from "react";
import Logo from "./../assets/logo/logo_principal 1.png";
import { BiMenu } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <div className="sticky top-0 relative z-50">
      <div className="h-20 w-full sticky top-0 flex justify-between items-center bg-primary px-10 relative">
        <div></div>
        <div>
          <img src={Logo} alt="" className="h-16" />
        </div>
        <div>
          <BiMenu
            className={"text-secondary text-5xl"}
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
              transition={{ duration: 0.3 }} // Adjust the duration as needed
            />
            <motion.div
              className="absolute top-0 left-0 px-5 w-screen bg-secondary "
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              exit={{ y: -1000 }}
              transition={{ duration: 0.3 }} // Adjust the duration as needed
            >
              <div className="flex justify-between items-center h-20 px-10">
                <div></div>
                <div>
                  <img src={Logo} alt="" className="h-16" />
                </div>
                <div>
                  <RxCross1
                    className={"text-primary text-4xl"}
                    onClick={() => setIsMenuVisible(false)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-around h-64 text-4xl text-primary font-medium">
                <div>Commander</div>
                <div className="w-px h-6 bg-complementary"></div>{" "}
                <div>Notre histoire</div>
                <div className="w-px h-6 bg-complementary"></div>{" "}
                <div>Contact</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
