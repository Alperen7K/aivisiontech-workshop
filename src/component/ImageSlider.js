import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import bigSpor2 from "../assets/imageSlider/BİGG Spor Ödülleri-2.jpg";
import bigSpor3 from "../assets/imageSlider/BİGG Spor Ödülleri-3.jpg";
import panel from "../assets/imageSlider/Expomed Eurasia Panel.jpg";
import bigSpor1 from "../assets/imageSlider/big-spor-1.jpeg";
import yatırım from "../assets/imageSlider/yatırım-haber-2.jpeg";

export const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  let buttonClass =
    "text-[#fff] mt-[550px] text-[20px] rounded-md py-2 px-4 shadow-2xl active:animate-bounce  card-bg bg-[#F77F93] hover:bg-[#f6627b] hover:scale-105";

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
    <div className="flex items-center flex-col justify-center h-screen ">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px] border-4 shadow-2xl border-solid border-[#eef2f7]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%", position: "absolute" }}
        />
      ))}
      <div className="w-[50vw] flex justify-evenly mt-10 z-[50]">
        <button className={buttonClass} onClick={handleBack}>
          Geri
        </button>
        <button className={buttonClass} onClick={handleNext}>
          İleri
        </button>
      </div>
    </div>
  );
};
