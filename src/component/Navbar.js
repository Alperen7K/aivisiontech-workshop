import logo from "../assets/aivisiontechBlack.svg";
import { motion } from "framer-motion";
import React from "react";

const navbarContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
    },
  },
};

const navbarItem = {
  hidden: { y: -25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Navbar = () => {
  let labelClass =
    "font-extrabold  text-[20px] px-6 text-[#000] hover:border-b-[3px] border-solid hover:border-[#5DB19B] box-border";

  return (
    <div className=" w-full h-[14vh] flex items-start justify-center  ">
      <div className="w-[85vw] h-full flex items-center justify-between">
        <img
          className=" h-[100px] animate-[wiggle_1s_ease-in-out_infinite]"
          src={logo}
        />

        <div className="flex items-center">
          <motion.ul
            className="flex items-center"
            variants={navbarContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={navbarItem}>
              <label className={labelClass}>Ürün</label>
            </motion.li>
            <motion.li variants={navbarItem}>
              <label className={labelClass}>Hakkımızda</label>
            </motion.li>
            <motion.li variants={navbarItem}>
              <label className={labelClass}>İletişim</label>
            </motion.li>
            <motion.li variants={navbarItem}>
              <label className={labelClass}>Haberler</label>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};
