import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { HumanModal } from "../component";
import { useStore } from "../zustandStore";
import { useInView } from "react-intersection-observer";

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

export const Ai4sports = ({ className }) => {
  const { theme, setIsShow } = useStore();
  let titleClass = `${theme.textColor} text-[60px] duration-200`;

  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  console.log("entryPro", inView);

  useEffect(() => {
    if (inView) {
      setIsShow("main");
    }
  }, [inView]);
  return (
    <section>
      <div
        className={`h-full w-full flex flex-col justify-end bg-pattern ${className}`}
      >
        <motion.div ref={ref}>
          <div className=" h-[90vh] w-full flex items-center justify-evenly ">
            {/* Left side */}
            <div className=" ml-[10vw]">
              <div className="  flex items-center justify-start ">
                {/* ai4sports */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <label
                    className={`ai4sports-font rounded-[30px] text-center ${theme.textColor}  text-[30px]   px-3 py-1 border-solid  border-[#5DB19B] border-4`}
                  >
                    ai4sports
                  </label>
                </motion.div>
              </div>
              {/* açıklama */}
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
                  className=" flex items-center justify-center w-[620px]"
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
        </motion.div>
      </div>
    </section>
  );
};
