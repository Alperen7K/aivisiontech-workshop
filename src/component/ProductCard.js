import React from "react";
import ai4sports from "../assets/ai4sportsCard.png";
import ai2neo from "../assets/ai2neoCard.png";

export const ProductCard = ({ index }) => {
  return (
    <>
      {index === 1 ? (
        <div className="w-[75vw] h-[35vh] card-bg bg-gradient-to-tl from-[#eef2f74e] from-1% ... border-2 border-solid border-[#eef2f7] rounded-[40px]">
          <div className="w-full h-full flex justify-around">
            <div className="flex flex-col w-[45vw] items-center justify-center">
              <div className="w-full flex  justify-start">
                <label className="ai4sports-font rounded-[30px] text-center text-black  text-[24px]   px-3 py-1 border-solid  border-[#5DB19B] border-4">
                  ai4sports
                </label>
                <div className="w-full h-full flex items-center justify-start pl-5">
                  <h2 className="ai4sports-font font-black text-[22px]">
                    FARK EDİLMEYEN SAKATLIKLARA SON!
                  </h2>
                </div>
              </div>
              <div className="h-[24vh] flex flex-col justify-evenly">
                <p className="p-1">
                  Yapay zeka destekli termal görüntüleme sistemimizle
                  profesyonel sporcularda olası sakatlık, kas problemleri ve
                  yorgunlukları tespit ediyor ve sakatlıkları belirliyoruz.
                </p>
                <p className="p-1">
                  Yaptığımız sakatlık tahmini sayesinde sakatlık sayısını
                  azaltarak hem yüksek tedavi masraflarından tasarruf sağlıyor
                  hem de sporcuların sakatlık yüzünden müsabaka kaçırmasını
                  engelleyerek spor kulüplerinin başarısına doğrudan katkı
                  sağlıyoruz.
                </p>
              </div>
            </div>
            <div className="flex items-center w-[23.5vw] justify-center">
              <img
                className="h-[30vh] rounded-[40px] border-2 border-solid border-[#eef2f7]"
                src={ai4sports}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[75vw] h-[35vh] card-bg bg-gradient-to-tl from-[#eef2f74e] from-1% ... border-2 border-solid border-[#eef2f7] rounded-[40px]">
          <div className="w-full h-full flex justify-around">
            <div className="flex items-center w-[23.5vw] justify-center">
              <img
                className="h-[30vh] rounded-[40px] border-2 border-solid border-[#eef2f7]"
                src={ai2neo}
              />
            </div>
            <div className="flex flex-col w-[45vw] items-center justify-center">
              <div className="w-full flex  justify-start">
                <label className="ai4sports-font rounded-[30px] text-center text-black  text-[24px]   px-3 py-1 border-solid  border-[#5DB19B] border-4">
                  ai2neo
                </label>
                <div className="w-full h-full flex items-center justify-start pl-5">
                  <h2 className="ai4sports-font font-black text-[22px]">
                    BEBEKLERİN MUHAFIZI!
                  </h2>
                </div>
              </div>
              <div className="h-[24vh] flex flex-col justify-evenly">
                <p className="p-1">
                  Yaklaşık 40000 (kırkbin)‘in üzerinde termal görüntü
                  kullanılarak geliştirilen algoritma ile erken doğan bebeklerin
                  hasta / sağlıklı olma durumları % 95’in üzerinde doğrulukla ve
                  120 saniyenin altında bir sürede belirlenmektedir.
                </p>
                <p className="p-1">
                  Yaklaşık 40000 (kırkbin)‘in üzerinde termal görüntü
                  kullanılarak geliştirilen algoritma ile erken doğan bebeklerin
                  hasta / sağlıklı olma durumları % 95’in üzerinde doğrulukla ve
                  120 saniyenin altında bir sürede belirlenmektedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
