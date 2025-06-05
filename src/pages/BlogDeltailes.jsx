import React from "react";
import emailie from "../assets/image/png/Emilie_img.png";
import beautiful_woman from "../assets/image/png/beautiful_woman.png";
import soft_beautiful from "../assets/image/png/soft_beautiful.png";
import GermanyImg from "../assets/image/png/Germany_img.png";
import {
  FaceBookIcon,
  InstaGramIcon,
  ReadMoreIcon,
  ShareIcon,
  TwiterIcon,
} from "../components/common/Icon";
import SkyRocketImag from "../assets/image/png/skyrockate_img.png";
import MyJourneyImag from "../assets/image/png/Myjourney_img.png";
import EarningImg from "../assets/image/png/Earning_img.png";
import ButtonComp from "../components/common/ButtonComp";

const BlogDeltailes = () => {
  return (
    <>
      <section className="overflow-hidden">
        <div className="bg-[#00AFEF0A]">
          <div className="container max-w-[1140px] m-auto px-3 mt-[76px]">
            <div className="grid grid-cols-1 md:grid-cols-2  h-[calc(100vh-76px)] lg:h-[600px] items-center  pt-[60px]">
              <div>
                <p className="font-bold text-[24px] sm:text-[36px] lg:text-[44px] uppercase leading-[118%]">
                  best places for your photoshoot across the world
                </p>
                <div className="flex items-center gap-[10px] pt-[11px]">
                  <p className="font-normal text-[18px] text-[#494D55] border-r-2 pr-[10px]  border-[#008CCF]">
                    8 mins read
                  </p>
                  <p className="font-normal text-[18px] text-[#494D55]">
                    June 12, 2023
                  </p>
                </div>
                <div className="flex items-center gap-[10px] mt-2">
                  <img src={emailie} alt="emilie" />
                  <p className="font-bold text-[20px]">Emilie James</p>
                </div>
                <div className=" flex gap-3 items-center mt-5 sm:mt-20 cursor-po">
                  <TwiterIcon />
                  <FaceBookIcon />
                  <InstaGramIcon />
                  <ShareIcon />
                </div>
              </div>
              <div className=" absolute right-0 w-full h-full lg:h-auto  lg:w-auto -z-10 top-0">
                <img
                  width={"100%"}
                  className=" h-full lg:h-auto object-cover"
                  src={beautiful_woman}
                  alt="beautiful_woman"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className=" container max-w-[840px] mx-auto px-3 mt-10">
          <p className=" text-xl text-[#01030D]" data-aos="fade-up">
            Captivating visuals are the essence of successful content on
            OnlyFans. When it comes to creating eye-catching photos and videos,
            location matters! In this blog, we will take you on a virtual
            journey to some of the most picturesque places around the world,
            perfect for your next jaw-dropping photoshoot.
          </p>
          {[1, 2, 3].map((v, i) => {
            return (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <h2 className=" text-[28px] sm:text-[36px] lg:text-[44px] text-[#01030D] mt-5 font-normal">
                  {i + 1}. Embrace Nature's Beauty
                </h2>
                <h4 className="text-[#008CCF] font-bold text-2xl uppercase my-3">
                  Maldives - Paradise Unveiled{" "}
                </h4>
                <p className=" text-xl text-[#01030D]">
                  Captivating visuals are the essence of successful content on
                  OnlyFans. When it comes to creating eye-catching photos and
                  videos, location matters! In this blog, we will take you on a
                  virtual journey to some of the most picturesque places around
                  the world, perfect for your next jaw-dropping photoshoot.
                </p>
                <div
                  className=" max-w-[718px] mx-auto mt-3"
                  data-aos="zoom-in"
                  data-aos-delay={i * 150}
                >
                  <img
                    width={"100%"}
                    src={soft_beautiful}
                    alt="soft_beautiful"
                  />
                </div>
                <p
                  className="font-bold text-[24px] text-[#008CCF] mt-[62px]"
                  data-aos="fade-right"
                >
                  The Black Forest, Germany - Mystical Wonderland
                </p>
                <p
                  className="font-normal text-[20px] mt-[12px]"
                  data-aos="fade-left"
                >
                  The Black Forest in Germany's southwestern region provides an
                  enchanting backdrop, with dense forests, charming villages,
                  and captivating trails, perfect for nature-inspired shoots.
                </p>
                <div
                  className="mx-auto max-w-[718px] mt-3"
                  data-aos="zoom-in-up"
                  data-aos-delay={i * 150}
                >
                  <img width={"100%"} src={GermanyImg} alt="germany" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="OurTeam_bg overflow-hidden">
        <div className=" py-[60px] md:pt-[169px] md:pb-[114px]">
          <p
            className="font-bold  flex flex-row-reverse items-center justify-center gap-2 text-[28px] sm:text-[36px] lg:text-[44px] uppercase text-center"
            data-aos="fade-up"
          >
            articles{" "}
            <span className="font-normal text-[#00AFEF] capitalize">
              related
            </span>{" "}
          </p>
          <div className="container max-w-[1140px] mx-auto px-3">
            <div className="flex flex-row flex-wrap gap-y-10 mx-3 pt-[38px] pb-[46px]">
              <div className=" w-full sm:w-6/12 lg:w-4/12 px-3">
                <div className="bg-white border border-white">
                  <img
                    width={"100%"}
                    src={SkyRocketImag}
                    alt="sky"
                    className="rounded-tl-[20px] rounded-tr-[20px]"
                  />
                  <p className="font-bold text-lg md:text-xl xl:text-[24px] uppercase pt-[27px] pb-[24px]">
                    10 Tips to Skyrocket Your OnlyFans Earnings
                  </p>
                  <button className="flex items-center gap-[16px] bg-white border border-white">
                    <p className="font-bold text-[16px] text-[#00AFEF] uppercase">
                      read more
                    </p>
                    <ReadMoreIcon />
                  </button>
                </div>
              </div>
              <div className="w-full sm:w-6/12 lg:w-4/12 px-3">
                <div className="bg-white border border-white">
                  <img
                    width={"100%"}
                    src={MyJourneyImag}
                    alt="sky"
                    className="rounded-tl-[20px] rounded-tr-[20px]"
                  />
                  <p className="font-bold text-lg md:text-xl xl:text-[24px] uppercase pt-[27px] pb-[24px]">
                    10k to 1000k: my journey of success
                  </p>
                  <button className="flex items-center gap-[16px] bg-white border border-white">
                    <p className="font-bold text-[16px] text-[#00AFEF] uppercase">
                      read more
                    </p>
                    <ReadMoreIcon />
                  </button>
                </div>
              </div>
              <div className="w-full sm:w-6/12 lg:w-4/12 px-3">
                <div className="bg-white border border-white">
                  <img
                    width={"100%"}
                    src={EarningImg}
                    alt="sky"
                    className="rounded-tl-[20px] rounded-tr-[20px]"
                  />
                  <p className="font-bold text-lg md:text-xl xl:text-[24px] uppercase pt-[27px] pb-[24px]">
                    earning $100 per day is not much hard...
                  </p>
                  <button className="flex items-center gap-[16px] bg-white border border-white">
                    <p className="font-bold text-[16px] text-[#00AFEF] uppercase">
                      read more
                    </p>
                    <ReadMoreIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ButtonComp btn_text="show all" btn_clr="#00AFEF" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDeltailes;
