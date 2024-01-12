import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useStore } from "../zustandStore";
import { Player } from "@lottiefiles/react-lottie-player";
import blackArrow from "../assets/DownArrowBlack.json";
import whiteArrow from "../assets/DownArrowWhite.json";

export const About = () => {
  const { theme, setIsShow } = useStore();
  const pClass = "text-bold text-[18px] p-5 py-6 rounded-lg text-justify";

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setIsShow("about");
    }
  }, [inView]);

  const card1 = {
    hidden: {
      opacity: 0,
      y: -250,
    },
    visible: { opacity: 1, y: 0 },
  };
  const card2 = {
    hidden: {
      opacity: 0,
      y: -250,
    },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about">
      <div className={`${theme.bgColor} h-full w-full  about-bg-pattern`}>
        <motion.div
          className="h-full w-full flex flex-col  items-center justify-center"
          ref={ref}
        >
          <div className="flex flex-col items-center justify-around w-[60vw]">
            <div className="w-[64vw] flex items-center justify-end">
              <Player
                autoplay
                loop
                className=""
                src={theme.theme === "dark" ? whiteArrow : blackArrow}
                style={{ height: "80px" }}
              />
            </div>
            <motion.div
              animate={inView ? "visible" : "hidden"}
              variants={card2}
              transition={{ duration: 1, ease: "easeOut" }}
              ref={ref}
            >
              <div
                className={`${
                  theme.theme === "dark" ? "bg-[#2c3036]" : "bg-[#c2d1e1]"
                } my-4  backdrop-blur-md rounded-lg shadow-md `}
              >
                <p className={pClass}>
                  Yapay zeka çözümleri üreten Aivisiontech’in, ai4sports adında
                  “Sporcu sakatlanmalarında kişiselleştirilmiş erken teşhis ve
                  sakatlık önleme” yazılımı termal görüntüleme ve yapay zeka
                  kullanarak, 30 saniyeden daha kısa sürede sporcu
                  sakatlıklarını erken tespit etmektedir. Kadın sporcular için
                  geliştirilen ai4sportsW ve e-sporcular için geliştirilen
                  ai4e-sports çözümleri alanında ilk ve tek olma özelliğine
                  sahiptir.
                </p>
              </div>
            </motion.div>
            <motion.div
              animate={inView ? "visible" : "hidden"}
              variants={card1}
              transition={{ duration: 0.5, ease: "easeOut" }}
              ref={ref}
            >
              <div
                className={`${
                  theme.theme === "dark" ? "bg-[#2c3036]" : "bg-[#c2d1e1]"
                } my-4  backdrop-blur-md rounded-lg shadow-md`}
              >
                <p className={pClass}>
                  Aivisiontech, özellikle sağlık ve spor alanlarında farklı
                  görüntüleme modalitelerinden (termal, hiperspektral, 3D vb.)
                  elde edilen verileri yapay zekâ ile analiz eden bir teknoloji
                  firmasıdır. Aivisiontech firması 2018 yılında Tübitak BİGG
                  desteğiyle Doç. Dr. Murat CEYLAN tarafından ODTÜ Teknokent’te
                  kurulmuş olup 2021 yılından itibaren Konya Teknokent’te
                  faaliyetlerini sürdürmektedir.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
