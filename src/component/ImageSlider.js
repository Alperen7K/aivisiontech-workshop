import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import bigSpor2 from "../assets/imageSlider/big-spor-2.png";
import bigSpor3 from "../assets/imageSlider/big-spor-3.png";
import panel from "../assets/imageSlider/panel.png";
import bigSpor1 from "../assets/imageSlider/big-spor-1.png";
import yatırım from "../assets/imageSlider/yatırım-haber-2.png";
import rightWhite from "../assets/rightArrow.svg";
import leftWhite from "../assets/leftArrow.svg";
import rightBlack from "../assets/rightArrowBlack.svg";
import leftBlack from "../assets/leftArrowBlack.svg";
import { useStore } from "../zustandStore";

export const ImageSlider = ({ ref, inView }) => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const { theme, setIsShow } = useStore();

  const rightButton = {
    hidden: {
      opacity: 0,
      x: 500,
    },
    visible: { opacity: 1, x: 0 },
  };
  const leftButton = {
    hidden: {
      opacity: 0,
      x: -500,
    },
    visible: { opacity: 1, x: 0 },
  };

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [bigSpor1, bigSpor2, bigSpor3, panel, yatırım];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div className="flex w-[100vw] items-center flex-col justify-center h-screen relative">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          ref={ref}
          className="rounded-[12px] border-4 shadow-2xl border-solid border-[#eef2f7]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 1 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="w-[100vw] flex justify-between z-[50]">
        <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={leftButton}
          transition={{ duration: 1, ease: "easeOut" }}
          ref={ref}
        >
          <button
            className="text-[#fff] flex items-center relative justify-center h-[100px] rounded-r-full  border-[#5DB19B] border-r-8 border-y-8 font-black border-solid w-[75px]  text-[20px]  py-2 px-4 shadow-2xl active:animate-bounce duration-200  card-bg  hover:scale-105"
            onClick={handleBack}
          >
            <img
              src={theme.theme === "dark" ? leftWhite : leftBlack}
              className="w-full absolute"
            />
          </button>
        </motion.div>
        <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={rightButton}
          transition={{ duration: 1, ease: "easeOut" }}
          ref={ref}
        >
          <button
            className="text-[#fff] flex items-center relative justify-center h-[100px] rounded-l-full  border-[#5DB19B] border-l-8 border-y-8 font-black border-solid w-[75px]  text-[20px]  py-2 px-4 shadow-2xl active:animate-bounce duration-200  card-bg  hover:scale-105"
            onClick={handleNext}
          >
            <img
              src={theme.theme === "dark" ? rightWhite : rightBlack}
              className="w-full absolute"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
