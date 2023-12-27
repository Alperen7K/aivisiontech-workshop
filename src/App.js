import "./App.css";
import logo from "./aivisiontechWhite.svg";
import termo from "./termoHUMAN.png";
import { motion } from "framer-motion";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import ai4sports from "./ai4sportsWhite.svg";
import { HumanModal } from "./component";

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

// #D6E1ED beyazımsı
// #5DB19B yeşil
// #4E9CE8 mavimsi
// #F77F93 PEMBE

export const App = () => {
  let labelClass =
    "font-bold bg-[#232931] text-[20px] px-2 text-[#EEEEEE] hover:border-b-[3px] border-solid hover:border-[#4ECCA3] box-border";

  return (
    <div className="h-[100vh] w-[100vw]  flex flex-col items-center">
      {/* Navbar */}
      <div className=" w-full h-[14vh] flex items-start justify-center bg-[#232931] border-solid border-b-4 border-[#4ECCA3] shadow-xl">
        <div className="w-[85vw] h-full flex items-center justify-between">
          <img className="dropShadow h-[100px]" src={logo} />
          <div className="flex items-center">
            <motion.ul
              className="flex items-center"
              variants={navbarContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={navbarItem}>
                <label className={labelClass}>ÜRÜN</label>
              </motion.li>
              <motion.li variants={navbarItem}>
                <label className={labelClass}>HAKKIMIZDA</label>
              </motion.li>
              <motion.li variants={navbarItem}>
                <label className={labelClass}>İLETİŞİM</label>
              </motion.li>
              <motion.li variants={navbarItem}>
                <label className={labelClass}>HABERLER</label>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>

      <div className="bg-[#393E46] h-full w-full">
        <div className="bg h-[88vh] w-full flex items-center justify-evenly ">
          {/* <Player
            autoplay
            loop
            src={deneme}
            className="dropShadow"
            style={{ height: "400px" }}
          /> */}
          <div className=" ml-16">
            <div className="  flex items-center justify-center ">
              <img
                className="bg-[#232931] rounded-[30px]  dropShadow w-[10vw] pr-2 border-solid  border-[#4ECCA3] border-4"
                src={ai4sports}
              />
            </div>
            <motion.ul
              className="gap-[10px]"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {/* <motion.li variants={item}> */}
              {/* </motion.li> */}

              <motion.li className=" text-[#eee] w-fit" variants={item}>
                <h1 className="dropShadow text-[60px] border-solid border-[#4ECCA3] border-b-4 border-r-4 rounded-br-xl pb-0 pr-3 mt-4 w-fit font-bold ">
                  Fark Edilmeyen
                </h1>
              </motion.li>
              <motion.li className=" text-[#eee]" variants={item}>
                <h1 className="dropShadow text-[60px] border-solid border-[#4ECCA3] border-b-4 border-r-4 rounded-br-xl pb-0 pr-3 mt-4 w-fit font-bold ">
                  Sakatlıklara SON!
                </h1>
              </motion.li>
            </motion.ul>
          </div>
          <HumanModal />
        </div>
      </div>
    </div>
  );
};
