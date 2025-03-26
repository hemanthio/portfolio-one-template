import { MoveRight } from "lucide-react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Cta = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full aspect-square bg-white dark:bg-black rounded-[18px] font-inter flex flex-col gap-6 items-center justify-center">
      <h1 className="text-black/90 dark:text-white/80 text-center font-[inter] 
      tracking-[-0.7px]  text-xl ">need a website, we've got you covered!</h1>
      <div className="flex">
        <div
          className="flex gap-4 cursor-pointer text-white items-center py-3 pr-4 pl-8 bg-[#F15024] rounded-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="text-xl font-semibold font-inter tracking-tighter ">Book a Call</h1>
          <div className="p-3 rounded-full flex bg-white overflow-hidden relative">
            <AnimatePresence mode="popLayout">
              {!isHovered ? (
                <motion.div
                  key="first"
                  initial={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoveRight color="#F15024" size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="second"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoveRight color="#F15024" size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;