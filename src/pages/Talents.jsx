import React from "react";
import { InstaGramIcon, TwiterIcon } from "../components/common/Icon";
import { AboutGirlsData } from "../components/common/DummyData";

function Talents() {
  return (
    <>
      <section className="aboutWhat_bg overflow-hidden">
        <div className=" container max-w-[1140px] mx-auto px-3">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5  mt-[60px] md:mt-[91px]  lg:mt-[151px] mb-[60px] md:mb-[91px]">
            {AboutGirlsData.map((v , i) => {
              return (
                <div
                  key={i}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <img width={"100%"} src={v.image} alt="marie" />
                  <div className=" absolute backdrop-blur-md rounded-t-[4px] rounded-bl-[4px] rounded-br-[20px] w-[98%] p-[17px_10px_18px_13px] bottom-3 left-2/4 -translate-x-2/4">
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-[24px] text-white">
                        {v.title}
                      </p>
                      <div className="flex gap-[14px] items-center">
                        <TwiterIcon />
                        <InstaGramIcon />
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-[10px] mt-2.5">
                      <p className="font-normal text-[18px] text-[#B8CAD4] xl:border-r-2 border-[#008CCF] lg:pe-[10px]">
                        Height-
                        <span className="text-white ">{v.Height}</span>
                      </p>
                      <p className="font-normal text-[18px] text-[#B8CAD4] lg:px-[10px] sm:px-[5px] px-[10px]">
                        Shoes-
                        <span className="text-white ">{v.Shoes}</span>
                      </p>
                      <p className="font-normal text-[18px] text-[#B8CAD4] xl:border-x-2 border-[#008CCF] lg:px-[10px] sm:px-[5px]  ">
                        {" "}
                        Hair-
                        <span className="text-white ">{v.Hair}</span>
                      </p>
                      <p className="font-normal text-[18px] text-[#B8CAD4]  sm:px-0 px-[10px]">
                        {" "}
                        Eyes-
                        <span className="text-white">{v.Eyes}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Talents;
