import React, { useEffect } from "react";
import { ImageSlider } from "../component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useStore } from "../zustandStore";

export const News = () => {
  const { theme, setIsShow } = useStore();

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setIsShow("news");
    }
  }, [inView]);

  console.log("entryNews", inView);

  return (
    <section id="news">
      <div className={`${theme.bgColor} h-full w-full  bg-pattern`}>
        <motion.div className="w-[100vw]" ref={ref}>
          <ImageSlider ref={ref} inView={inView} />
        </motion.div>
      </div>
    </section>
  );
};
