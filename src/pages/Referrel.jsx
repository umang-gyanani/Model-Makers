import React from "react";
import FormImg from "../assets/image/png/formgirl_img.png";

import { ReviewData } from "../components/common/DummyData";
import SliderCard from "../components/common/SliderCard";
import Faq from "../components/common/Faq";
import ButtonComp from "../components/common/ButtonComp";
const Referrel = () => {
  return (
    <>
      {/* ======================cards============ */}
      <div className="reviewCard_bg py-[90px] overflow-hidden">
        <section className="container max-w-[1140px] m-auto px-3 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[66px]">
            {ReviewData.map((v, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  {v.image}
                  <p className="font-bold text-[24px] pt-[30px] pb-[8px]">
                    {v.title}
                  </p>
                  <p className="font-normal text-[18px] text-[#4C4E55] text-center">
                    {v.Discription}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      {/* ==================form============= */}
      <section className="overflow-hidden">
        <div className="form_bg relative">
          <div className=" container max-w-[1180px] px-3 mx-auto py-[60px] md:py-[80px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-10 xl:gap-[54px]">
              <div>
                <img
                  className="lg:absolute left-0 top-0 md:h-full w-full md:w-[85%] mx-auto lg:w-[50%] xl:w-[45%] "
                  src={FormImg}
                  alt="formimg"
                  data-aos="fade-right"
                />
              </div>
              <form
                className=" w-full md:w-[85%] lg:w-full mx-auto"
                data-aos="fade-left"
              >
                <div>
                  <div className="flex items-center gap-[15px] mb-[23px]">
                    <p className="font-bold text-[24px] uppercase text-white text-nowrap ">
                      your details
                    </p>
                    <span className="border-[3px] border-white w-full"></span>
                  </div>
                  <div>
                    <div>
                      <label className=" font-bold text-[20px] text-white capitalize ">
                        full name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className=" border border-white rounded-[12px] w-full h-[64px] outline-0 text-[24px] text-white p-[20px] mt-[10px] mb-[16px] bg-[#32BEF2]"
                      />
                    </div>
                    <div>
                      <label className=" font-bold text-[20px] text-white capitalize ">
                        email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className=" border border-white rounded-[12px] w-full h-[64px] outline-0 text-[24px] text-white p-[20px] mt-[10px] mb-[16px] bg-[#32BEF2]"
                      />
                    </div>
                    <div>
                      <label className=" font-bold text-[20px] text-white capitalize ">
                        mobile number
                      </label>
                      <input
                        type="number"
                        name="number"
                        className=" bg-[#32BEF2] border border-white rounded-[12px] w-full h-[64px] outline-0 text-[24px] text-white p-[20px] mt-[10px] mb-[16px]"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-[15px] mb-[23px] mt-[44px]">
                    <p className="font-bold text-[24px] uppercase text-white text-nowrap  ">
                      your partner details
                    </p>
                    <span className="border-[3px] border-white w-full"></span>
                  </div>
                  <div>
                    <div>
                      <label className=" font-bold text-[20px] text-white capitalize ">
                        full name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className=" border border-white rounded-[12px] w-full h-[64px] outline-0 text-[24px] text-white p-[20px] mt-[10px] mb-[16px] bg-[#32BEF2]"
                      />
                    </div>
                    <div>
                      <label className=" font-bold text-[20px] text-white capitalize ">
                        email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className=" border border-white rounded-[12px] w-full h-[64px] outline-0 text-[24px] text-white p-[20px] mt-[10px] mb-[16px] bg-[#32BEF2]"
                      />
                    </div>
                    <div>
                      <label className=" font-bold text-[20px] text-white capitalize ">
                        mobile number
                      </label>
                      <input
                        type="number"
                        name="number"
                        className=" bg-[#32BEF2] border border-white rounded-[12px] w-full h-[64px] outline-0 text-[24px] text-white p-[20px] mt-[10px] mb-[16px]"
                      />
                    </div>
                    <div>
                      <label className=" font-bold text-[20px] text-white capitalize ">
                        instagram
                      </label>
                      <input
                        type="text"
                        name="instagram"
                        className=" bg-[#32BEF2] border border-white rounded-[12px] w-full h-[64px] outline-0 text-[24px] text-white p-[20px] mt-[10px] mb-[44px]"
                      />
                    </div>
                  </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                  <ButtonComp btn_text="submit" btn_clr="#18314F" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================Formcard================ */}
      <section className="overflow-hidden">
        <div className="formcard_bg">
          <div className=" flex flex-col items-center justify-center py-[65px] sm:py-[80px] md:py-[90px] lg:py-[154px] ">
            <p
              className="font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-white uppercase text-center max-w-[650px] mb-[44px] px-3"
              data-aos="fade-up"
            >
              Unlocking Success: How{" "}
              <span className="font-normal  capitalize ">
                Partnering with Us
              </span>{" "}
              Works
            </p>
            <div className="container max-w-[1140px] mx-auto px-3">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] mt-[39px]   relative before:absolute before:border before:border-white before:w-[68%] before:-top-[32px] before:left-[17%]  before:hidden lg:before:block before:bg-white ">
                {[5, 7, 8].map((i, v) => {
                  return (
                    <div
                      className="border border-white rounded-[50px_0px_50px_0px] bg-[#FCFCFF24] backdrop-blur-[8px] p-[52px_16px_36px_16px] relative before:absolute before:contains-[] before:border before:border-white  before:bg-white before:rounded-[100%] before:w-[16px] before:h-[16px] before:hidden lg:before:block before:-top-[39px] before:left-[50%] "
                      data-aos="zoom-in-up"
                      data-aos-delay={v * 150}
                    >
                      <div className="text-center">
                        <p className="font-bold text-[24px] text-white">
                          Spread the Love
                        </p>
                        <p className="font-normal text-[18px] text-white pt-[10px]">
                          {" "}
                          Invite your friends to join Model Makers Elite and
                          unlock a world of possibilities. Earn generous
                          commissions on their earnings while building a
                          supportive community that thrives together.
                        </p>
                      </div>
                      ,
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================slider============== */}
      <div className=" overflow-hidden">
        <SliderCard />
      </div>

      {/* ================Faq================== */}
      <Faq />
    </>
  );
};

export default Referrel;
