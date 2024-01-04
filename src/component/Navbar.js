import blackLogo from "../assets/aivisiontechBlack.svg";
import whiteLogo from "../assets/aivisiontechWhite.svg";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";
import { motion } from "framer-motion";
import React from "react";
import { useStore } from "../zustandStore";

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

export const Navbar = ({ isView }) => {
  const { theme, setTheme, isShow } = useStore();

  console.log(theme);

  console.log(isShow);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  let labelClass = `${
    theme.theme === "light" ? "text-black" : "text-[#fff]"
  } font-extrabold mx-1  text-[20px] px-6 hover:border-b-[3px] border-solid hover:border-[#5DB19B] box-border hover:scale-105 duration-200`;

  let lightTheme = {
    theme: "light",
    bgColor: "bg-[#D6E1ED]",
    textColor: "text-[#000]",
    cardBorder: "border-[#eef2f7]",
  };
  let darkTheme = {
    theme: "dark",
    bgColor: "bg-[#393E46]",
    textColor: "text-[#fff]",
    cardBorder: "border-[#000]",
  };

  return (
    <div className=" fixed top-0 right-0 left-0 z-40">
      <div className=" w-full h-[14vh] flex items-start justify-center  ">
        <div className="w-[85vw] h-full flex items-center justify-between">
          <img
            className="hover:scale-105 duration-150 h-[100px] animate-[wiggle_1s_ease-in-out_infinite]"
            src={theme.theme === "light" ? blackLogo : whiteLogo}
            onClick={() => {
              scrollToTop();
            }}
          />
          <div className="flex items-center">
            <motion.ul
              className="flex items-center"
              variants={navbarContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={navbarItem}>
                <a href="#products">
                  <label
                    className={`${
                      isShow === "product"
                        ? `font-extrabold mx-1 text-[20px] px-6 ${
                            theme.theme === "light"
                              ? "text-black"
                              : "text-white"
                          }  border-b-[3px] border-solid border-[#5DB19B] box-border`
                        : labelClass
                    }`}
                  >
                    Ürünler
                  </label>
                </a>
              </motion.li>
              <motion.li variants={navbarItem}>
                <label className={labelClass}>Haberler</label>
              </motion.li>
              <motion.li variants={navbarItem}>
                <label className={labelClass}>Hakkımızda</label>
              </motion.li>
              <motion.li variants={navbarItem}>
                <label className={labelClass}>İletişim</label>
              </motion.li>
              <motion.li variants={navbarItem}>
                <div className="ml-10">
                  <img
                    onClick={() => {
                      console.log("TEMA DEĞİŞTİ");

                      if (theme.theme === "light") {
                        setTheme(darkTheme);
                      } else {
                        setTheme(lightTheme);
                      }
                    }}
                    className={` h-[25px] border-solid border-[2px] ${
                      theme.theme === "light"
                        ? "border-[#000000b0]"
                        : "border-[#ffffffb0]"
                    } rounded-xl p-1 border-box`}
                    src={theme.theme === "light" ? dark : light}
                  />
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
};
