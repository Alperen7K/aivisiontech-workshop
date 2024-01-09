import React, { useEffect, useRef } from "react";
import { ProductCard } from "../component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { useStore } from "../zustandStore";

export const Products = () => {
  const { theme, setIsShow } = useStore();

  const [ref, inView, entry] = useInView({
    // threshold: 0.1,
    triggerOnce: false,
  });

  console.log("entryPro", inView);

  useEffect(() => {
    if (inView) {
      setIsShow("product");
    }
  }, [inView]);


  const card1 = {
    hidden: {
      opacity: 0,
      x: -500,
    },
    visible: { opacity: 1, y: 0 },
  };
  const card2 = {
    hidden: {
      opacity: 0,
      x: 500,
    },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section id="products">
      <div className={`${theme.bgColor} h-full w-full  about-bg-pattern`}>
        <motion.div ref={ref} className="h-[14vh] w-full" />
        <div className="h-[85vh] w-full flex flex-col items-center justify-evenly ">
          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={card1}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
          >
            <ProductCard index={1} />
          </motion.div>
          <motion.div
            animate={inView ? "visible" : "hidden"}
            variants={card2}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={ref}
          >
            <ProductCard index={2} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};