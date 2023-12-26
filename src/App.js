import { useEffect, useState } from "react";
import "./App.css";
import logo from "./aivisiontechWhite.svg";
import termo from "./termoHUMAN.png";
import { motion } from "framer-motion";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import deneme from "./03.json";
import deneme1 from "./lottieflow-background-01-F48127-easey.json";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const App = () => {
  let labelClass =
    "font-bold px-2 text-[#EEEEEE] hover:border-b-[3px] border-solid hover:border-[#4ECCA3] box-border";

  return (
    <div className="h-[100vh] w-[100vw]  flex flex-col items-center">
      <div className="w-full h-[12vh] flex items-start justify-center bg-[#232931] border-solid border-b-4 border-[#4ECCA3] shadow-xl">
        <div className="w-[85vw] h-full flex items-center justify-between">
          <img className="h-[85px]" src={logo} />
          <div className="flex items-center">
            <label className={labelClass}>ÜRÜN</label>
            <label className={labelClass}>HAKKIMIZDA</label>
            <label className={labelClass}>İLETİŞİM</label>
            <label className={labelClass}>HABERLER</label>
          </div>
        </div>
      </div>
      <div className="bg-[#393E46] h-full w-full">
        <div className="bg h-[88vh] w-full flex items-center justify-evenly ">
          <div className="">
            <motion.ul
              className="  grid grid-cols-2 gap-[10px]"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {[0, 1, 2, 3].map((index) => (
                <motion.li
                  key={index}
                  className="w-[10vw] h-[10vw] bg-[#4ECCA3] text-[#eee]"
                  variants={item}
                >
                  {index}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <img className="dropShadow h-[30vw] " src={termo} />
        </div>
      </div>
      {/* <Player
        autoplay
        loop
        src={deneme}
        style={{ height: "300px", width: "300px" }}
      />
      <Player
        autoplay
        loop
        src={deneme1}
        style={{ height: "300px", width: "300px" }}
      /> */}
    </div>
  );
};
