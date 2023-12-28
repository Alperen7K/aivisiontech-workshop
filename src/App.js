import "./App.css";
import { motion } from "framer-motion";
import ai4sports from "./assets/ai4sportsBlack.svg";
import { HumanModal, Navbar } from "./component";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

// #D6E1ED beyazımsı
// #5DB19B yeşil
// #4E9CE8 mavimsi
// #F77F93 PEMBE

export const App = () => {
  let titleClass = "text-[#000] text-[60px]";

  return (
    <div className="bg-[#D6E1ED] bg-pattern h-[100vh] w-[100vw]  flex flex-col items-center">
      <Navbar />
      <div className=" h-full w-full">
        <div className="bg h-[88vh] w-full flex items-center justify-evenly ">
          {/* Left side */}
          <div className=" ml-[10vw]">
            <div className="  flex items-center justify-start ">
              {/* <img
                className=" rounded-[30px]   w-[10vw] pr-2 p-1 border-solid  border-[#4ECCA3] border-4"
                src={ai4sports}
              /> */}
              <label className="ai4sports-font rounded-[30px] text-center  text-[30px]   px-3 py-1 border-solid  border-[#5DB19B] border-4">
                ai4sports
              </label>
            </div>
            <motion.ul
              className="gap-[10px]"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.li className="  w-fit" variants={item}>
                <h1 className={`${titleClass}`}>Fark Edilmeyen</h1>
              </motion.li>
              <motion.li className=" " variants={item}>
                <h1 className={`${titleClass}`}>Sakatlıklara SON!</h1>
              </motion.li>
              <motion.li
                className=" text-[#000] flex items-center justify-center w-[620px]"
                variants={item}
              >
                <label className=" text-[20px]  mt-4 line-clamp-4 text-balance font-bold ">
                  Yapay zeka destekli termal görüntüleme sistemimizle
                  profesyonel sporcularda olası sakatlık, kas problemleri ve
                  yorgunlukları tespit ediyor ve sakatlıkları belirliyoruz.
                </label>
              </motion.li>
            </motion.ul>
          </div>
          {/* 3D modal */}
          <HumanModal />
        </div>
      </div>
    </div>
  );
};

// <Player
// autoplay
// loop
// src={deneme}
// className="dropShadow"
// style={{ height: "400px" }}
// />
