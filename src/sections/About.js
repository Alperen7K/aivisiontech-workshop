import React, { useEffect, useRef } from "react";
import { ImageSlider, ProductCard } from "../component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { useStore } from "../zustandStore";

export const About = () => {
  const { theme, setIsShow } = useStore();
  const pClass = "text-bold text-[18px] p-2 py-6 text-justify";

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setIsShow("about");
    }
  }, [inView]);

  console.log("entryNews", inView);

  return (
    <section id="about">
      <div className={`${theme.bgColor} h-full w-full  about-bg-pattern`}>
        <motion.div
          className="h-full w-full flex items-center justify-center"
          ref={ref}
        >
          <div className="flex flex-col items-center justify-around w-[60vw]">
            <p className={pClass}>
              Aivisiontech, özellikle sağlık ve spor alanlarında farklı
              görüntüleme modalitelerinden (termal, hiperspektral, 3D vb.) elde
              edilen verileri yapay zekâ ile analiz eden bir teknoloji
              firmasıdır. Aivisiontech firması 2018 yılında Tübitak BİGG
              desteğiyle Doç. Dr. Murat CEYLAN tarafından ODTÜ Teknokent’te
              kurulmuş olup 2021 yılından itibaren Konya Teknokent’te
              faaliyetlerini sürdürmektedir.
            </p>
            <p className={pClass}>
              Yapay zeka çözümleri üreten Aivisiontech’in, ai4sports adında
              “Sporcu sakatlanmalarında kişiselleştirilmiş erken teşhis ve
              sakatlık önleme” yazılımı termal görüntüleme ve yapay zeka
              kullanarak, 30 saniyeden daha kısa sürede sporcu sakatlıklarını
              erken tespit etmektedir. Kadın sporcular için geliştirilen
              ai4sportsW ve e-sporcular için geliştirilen ai4e-sports çözümleri
              alanında ilk ve tek olma özelliğine sahiptir.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
