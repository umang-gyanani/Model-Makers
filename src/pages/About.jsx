import React from "react";
import AboutStartImg from "../assets/image/png/aboutstart_img.png";
import Button from "../components/common/Button";
import { WhatWeDoData } from "../components/common/DummyData";
function About() {
  return (
    <>
      {/* ========================When it start======= */}
      <section className="pt-[69px] overflow-hidden">
        <div className="container max-w-[1140px] m-auto px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <img
              width={"100%"}
              src={AboutStartImg}
              alt="aboutimg"
              data-aos="fade-right"
            />
            <div data-aos="fade-left">
              <p className="font-bold text-[28px] sm:text-[36px] lg:text-[44px] uppercase">
                when it{" "}
                <span className="font-normal text-[#00AFEF] capitalize">
                  starts?
                </span>
              </p>
              <p className="font-normal text-[18px] text-[#4C4E55] pt-[10px]">
                <span className="font-bold">Emilly jones</span> founded Model
                Makers Elite with a vision – to create a platform where talented
                individuals like you can truly shine and succeed.
              </p>
              <p className="font-normal text-[18px] text-[#4C4E55]">
                Having experienced the journey as a content creator myself, I
                understand the challenges and the joys that come with it. That's
                why at Model Makers Elite, we strive to be more than just a
                support system – we are your partners in growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========whatwedo=========== */}
      <section className="overflow-hidden">
        <div className="aboutWhat_bg">
          <div
            className="text-center pt-[50px] md:pt-[60px]  lg:pt-[83px] pb-[20px]  md:pb-[50px] lg:pb-[69px]"
            data-aos="fade-up"
          >
            <p className="font-bold text-[28px] sm:text-[36px] lg:text-[44px] uppercase">
              what{" "}
              <span className="font-normal text-[#00AFEF] capitalize">
                we do
              </span>
            </p>
          </div>
          {WhatWeDoData.map((v, i) => {
            return (
              <div
                className={`${
                  i !== 0
                    ? " mt-[40px] md:mt-[420px]"
                    : " mt-[40px] md:mt-[60px]"
                }`}
              >
                <div className={`   blue_bg   md:h-[210px] relative`}>
                  <div className={`${(i === 3 || i === 4) && ""} `}>
                    <div className="container max-w-[1140px] m-auto px-3">
                      <div
                        className={`flex flex-col flex-wrap md:flex-nowrap gap-[40px] lg:gap-[89px] ${
                          i % 2 == 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                      >
                        <div
                          className=" w-full md:w-6/12"
                          data-aos={i % 2 == 0 ? "fade-right" : "fade-left"}
                        >
                          <img
                            className=" md:-translate-y-10"
                            width={"100%"}
                            src={v.image}
                            alt="SubscriberImg"
                          />
                        </div>
                        <div
                          className=" w-full md:w-6/12"
                          data-aos={i % 2 == 0 ? "fade-right" : "fade-left"}
                        >
                          <p className="font-bold text-[28px] sm:text-[32px]  lg:text-[44px] text-black md:text-white py-[0px] md:py-[55px] uppercase lg:py-[40px]">
                            {v.title}
                          </p>
                          <p className="font-normal text-[18px] text-[#4C4E55] pt-[31px] pb-[24px]">
                            {v.Discription}
                          </p>
                          <Button btn_text="apply now" btn_clr="#00AFEF" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* ==============Contentplaning================= */}
      <section className="overflow-hidden">
        <div className="expert_bg  mt-[70px] sm:mt-[100px] md:mt-[300px] lg:mt-[420px]">
          <div className="container max-w-[1140px] m-auto px-3 ">
            <div
              className="flex flex-row mx-3 py-[80px] md:py-[178px]"
              data-aos="fade-up"
            >
              <div
                className=" w-full sm:w-10/12 md:w-8/12 lg:w-6/12"
                data-aos="fade-right"
              >
                <p className="font-bold  text-[28px] sm:text-[36px] lg:text-[44px] text-white leading-[118%] uppercase ">
                  the{" "}
                  <span className="font-normal text-[#00AFEF] capitalize">
                    expert
                  </span>{" "}
                  behind{" "}
                </p>
                <p className="font-normal text-base sm:text-[18px] text-white pt-[10px] pb-[29px]">
                  Having experienced the journey as a content creator myself, I
                  understand the challenges and the joys that come with it.
                  That's why at Model Makers Elite, we strive to be more than
                  just a support system – we are your partners in growth.
                  <p
                    className="font-normal text-base sm:text-[18px] text-white"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    Our team of industry veterans and professionals is here to
                    offer you personalized guidance, tailored strategies, and
                    the tools you need to flourish on OnlyFans. We believe in
                    nurturing a thriving community where collaboration,
                    empowerment, and inspiration abound.
                  </p>
                </p>
                <div
                  className="flex gap-[12px]  "
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className=" border-2 border-[#00AFEF]"></div>
                  <div className="flex flex-col">
                    <p className="font-bold text-[24px] text-white uppercase">
                      Emilly jones
                    </p>
                    <p className="font-bold text-[20px] text-[#B4B5BA] pt-[7px]">
                      founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
