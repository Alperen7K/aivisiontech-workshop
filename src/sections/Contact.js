import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logoBlack from "../assets/aivisiontechBlack.svg";
import navLight from "../assets/navLight.json";
import navDark from "../assets/navDark.json";
import { useStore } from "../zustandStore";
import { Player } from "@lottiefiles/react-lottie-player";

export const Contact = () => {
  const { theme, setIsShow } = useStore();

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setIsShow("contact");
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
    <section id="contact">
      <div
        className={`${theme.bgColor}  h-full w-full  ${
          theme.theme === "dark"
            ? "contact-dark-bg-pattern"
            : "contact-light-bg-pattern"
        }`}
      >
        <motion.div
          className="h-full w-full flex flex-col items-center justify-center"
          ref={ref}
        >
          <div className="w-full h-[10vh] flex items-center" />

          <div className="w-full h-[65vh] flex items-center justify-center">
            <div
              className={`${
                theme.theme === "dark" ? "bg-[#2c3036] " : "bg-[#c2d1e1]"
              } w-[25vw] px-10 mx-10 py-6 h-[55vh] shadow-xl rounded-xl`}
            >
              <div className=" flex items-center justify-start mb-2">
                <Player
                  autoplay
                  loop
                  src={theme.theme === "dark" ? navDark : navLight}
                  style={{ height: "40px" }}
                />
                <br />
                <label className="mx-2 text-[30px] decoration-1">
                  İletişim
                </label>
              </div>
              <label
                className={`text-[14px] ${
                  theme.theme === "dark"
                    ? "text-[#ffffffb7]"
                    : "text-[#000000b7]"
                }  pb-2`}
              >
                <span className={`text-[20px]  ${theme.textColor}`}>ADRES</span>
                <br />
                AIVISIONTECH
                <br />
                Elektronik Yazılım A.Ş. Akademi
                <br />
                Mah. Gürbulut Sokak S.Ü. Teknoloji
                <br /> Geliştirme Sit. Bölgesi KONYA TEKNOKENT Blok No:67
                <br />
                Selçuklu/KONYA
              </label>
              <br />
              <br />
              <label
                className={`text-[14px] ${
                  theme.theme === "dark"
                    ? "text-[#ffffffb7]"
                    : "text-[#000000b7]"
                }  pb-2`}
              >
                <span className={`text-[20px]  ${theme.textColor}`}>
                  BİZE ULAŞIN
                </span>
                <br />
                +90 (535) 923 01 90
              </label>
              <br />
              <br />
              <label
                className={`text-[14px] ${
                  theme.theme === "dark"
                    ? "text-[#ffffffb7]"
                    : "text-[#000000b7]"
                }  pb-2`}
              >
                <span className={`text-[20px]  ${theme.textColor}`}>
                  E-POSTA
                </span>
                <br />
                murat@aivisiontech.net
              </label>
            </div>
            <div
              className={`${
                theme.theme === "dark" ? "bg-[#2c3036] " : "bg-[#c2d1e1]"
              } w-[45vw] px-10 mx-10 py-6 h-[45vh] shadow-xl flex flex-col items-center   rounded-xl`}
            >
              <div className="w-full flex justify-between  items-start">
                <div className="">
                  <div className="flex flex-col  items-start justify-center mb-2">
                    <label className="ml-4 text-[18px]">İsim</label>
                    <input
                      className="w-[19vw] h-[4vh] rounded-md m-1"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center mb-2">
                    <label className="ml-4 text-[18px]">E-posta</label>
                    <input
                      className="w-[19vw] h-[4vh] rounded-md m-1"
                      type="text"
                    />
                  </div>
                </div>
                <div className="ml-2">
                  <div className="flex flex-col items-start justify-center mb-2">
                    <label className="ml-4 text-[18px]">Telefon Numarası</label>
                    <input
                      className="w-[19vw] h-[4vh] rounded-md m-1"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center mb-2">
                    <label className="ml-4 text-[18px]">Konu</label>
                    <input
                      className="w-[19vw] h-[4vh] rounded-md m-1"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-start">
                  <label className="ml-4 text-[18px]">Açıklamanızı girin</label>
                  <textarea
                    draggable={false}
                    rows={1}
                    className="text-[#000] w-[39.3vw] h-[8vh] rounded-md m-1"
                  />
                </div>
                <button
                  className={`w-[150px] active:animate-bounce h-[50px] rounded-md border-2 duration-200 border-solid border-[#fff] mt-5 ${
                    theme.theme === "dark"
                      ? "bg-[#ffffff43] hover:bg-[#ffffff] hover:text-[#000] "
                      : "bg-[#d2dae1] hover:bg-[#ffffff] "
                  } `}
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-[#000] w-full h-[25vh]">
            <div className="w-full h-[20vh] flex items-center justify-around">
              <div className="w-[400px] flex flex-col items-center justify-center">
                <div className=" flex flex-col items-left justify-center">
                  <label className="font-extrabold">ÇALIŞMA SAATLERİ</label>
                  <label className="font-light text-[14px]">
                    10.00 – 18.00
                    <br />
                    Pazartesi – Cumartesi
                    <br />
                    Sorularınız için 7/24 e-posta adresimiz
                    <br /> üzerinden bizimle iletişim kurabilirsiniz.
                  </label>
                </div>
              </div>
              <label className="w-[400px] text-center">
                Farklı görüntüleme modalitelerinden (termal, hiperspektral, 3D
                vb.) elde edilen verileri yapay zeka ile analiz eden bir
                teknoloji firmasıdır.
              </label>
              <div className="w-[400px] flex items-center justify-center">
                <img className="h-[100px]" src={logoBlack} />
              </div>
            </div>

            {/* Copyright */}
            <div className="w-full h-[5vh] flex items-center justify-center border-t-2 border-solid border-[#0000004a]">
              <label className="text-[12px]">
                © Copyrights 2021 AIVISIONTECH
              </label>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
