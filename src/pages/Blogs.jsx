import React from "react";
import { WhatWeDoData } from "../components/common/DummyData";
import ButtonComp from "../components/common/ButtonComp";

function Blogs() {
  return (
    <div className="overflow-hidden">
      {WhatWeDoData.map((v, i) => {
        return (
          <div
            className={`my-[0px] lg:my-[120px] ${i === 0 && "mt-[50px]"} ${
              i === 5 && "mb-[40px]"
            }`}
          >
            <div
              className={`blue_blogs_bg  relative py-[40px] sm:py-[40px] lg:py-0`}
            >
              <div className={`${(i === 3 || i === 4) && ""} `}>
                <div className="container max-w-[1140px] m-auto px-3">
                  <div
                    className={`flex flex-col items-center flex-wrap md:flex-nowrap gap-[40px] lg:gap-[89px] md:flex-row`}
                  >
                    <div
                      className=" w-full md:w-6/12"
                      data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                      <img width={"100%"} src={v.image} alt="SubscriberImg" />
                    </div>
                    <div
                      className="w-full md:w-6/12"
                      data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                      <p className="font-bold text-[28px] sm:text-[30px] lg:text-[44px] text-black md:text-white py-[0px] uppercase ">
                        {v.title}
                      </p>
                      <p className="font-normal text-[18px] py-5 text-black md:text-[#fcfcfc]">
                        {v.Discription}
                      </p>
                      <ButtonComp
                        btn_text="apply now"
                        btn_clr="#18314f"
                        link="/blogdeltailes"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
