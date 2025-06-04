import React, { useEffect, useState } from "react";

import { ReviewData, TalentCardData, TimeLineData } from "../components/common/DummyData";
import TrustedImg from "../assets/image/png/trusted_img.png";
import Button from "../components/common/Button";
import YahooImg from "../assets/image/png/Yahoo_img.png";
import TimelineGirl from "../assets/image/png/Timeline_girlimg.png";
import {
  Competitionicon,
  LandScapIcon,
  PersonalizedIcon,
  Qualityicon,
  ReadMoreIcon,
} from "../components/common/Icon";
import SkyRocketImag from "../assets/image/png/skyrockate_img.png";
import MyJourneyImag from "../assets/image/png/Myjourney_img.png";
import EarningImg from "../assets/image/png/Earning_img.png";
import Marquee from "react-fast-marquee";
import Faq from "../components/common/Faq";
import Slider from "react-slick";
import SliderCard from "../components/common/SliderCard";
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // default animation duration (in ms)
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <>
      {/* ================ReviewCard=========== */}

      <div className="reviewCard_bg py-[90px] overflow-hidden">
        <section className="container max-w-[1140px] m-auto px-3 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[66px]">
            {ReviewData.map((v, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col md:items-center"
                  data-aos="fade-up"
                  data-aos-delay={i * 100} // staggered delay
                >
                  {v.image}
                  <p className="text-bold text-[24px] pt-[30px] pb-[8px]">
                    {v.title}
                  </p>
                  <p className="text-normal text-[18px] text-[#4C4E55] md:text-center">
                    {v.Discription}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* ===================TrustedTeam================= */}

      <section className="pt-[50px] pb-[110px] flex justify-center overflow-hidden">
        <div className="container max-w-[1140px] m-auto px-3">
          <div className="flex flex-col gap-y-10 md:flex-row items-center">
            {/* Left Image */}
            <div
              className="w-full md:w-5/12 lg:w-6/12"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img width={"100%"} src={TrustedImg} alt="trustedimg" />
            </div>

            {/* Right Text Content */}
            <div
              className="w-full md:w-7/12 lg:w-6/12"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <p className="text-bold text-[28px] sm:text-[36px] lg:text-[44px] uppercase">
                a <span className="text-[#00AFEF] capitalize">team</span> you
                can trust
              </p>
              <p className="text-normal text-[18px] text-[#4C4E55] pt-[10px]">
                At Model Makers Elite, we pride ourselves on being an exclusive
                Only Fans agency that represents the most talented and
                captivating models on the platform.
              </p>
              <p className="text-normal text-[18px] text-[#4C4E55] pb-[29px] pt-[10px]">
                Our agency is dedicated to showcasing the beauty and skills of
                our models, while ensuring they have a safe and empowering
                experience.
              </p>
              <Button btn_text="Apply Now" btn_clr="#20B8F1" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================MarketingPartner================= */}

      <section className="marketing_bg overflow-hidden">
        <div className="py-[40px] md:pt-[87px] md:pb-[106px]">
          <div className="container max-w-[1140px] m-auto px-3">
            <p className="uppercase text-bold text-[28px] sm:text-[36px] lg:text-[44px] text-white">
              your <span className="capitalize text-normal">Ultimate</span>{" "}
              Marketing Partner{" "}
            </p>
            <div className="flex flex-row">
              <div className="w-full md:w-10/12 lg:w-6/12">
                {[
                  {
                    title: "Subscriber Growth Services",
                    desc: "We've got you covered with proven strategies and techniques to help you grow your subscriber base and increase your earnings.",
                  },
                  {
                    title: "Content Planning and Creation",
                    desc: "Let us assist you in planning and creating engaging content that resonates with your unique fanbase.",
                  },
                  {
                    title: "promotional Campaigns",
                    desc: "We'll showcase your content in the right places and make sure you're getting the attention you deserve.",
                  },
                  {
                    title: "Personalized Consulting",
                    desc: "Receive one-on-one guidance and support from our team of experienced professionals.",
                  },
                  {
                    title: "Customized Profile Design",
                    desc: "Stand out from the crowd with a visually appealing and engaging profile, tailored specifically to your brand and target audience.",
                  },
                  {
                    title: "24/7 Chatting Profit Service",
                    desc: "We will manage your OF account 24/7 so while you're sleeping tips, subscriptions and money is coming in.",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                    data-aos-duration="800"
                    className={`bg-[#18314F0F] backdrop-blur-xl py-[20px] px-[18px] ${
                      index === 0 ? "mt-[33px]" : "sm:mt-[24px]"
                    }`}
                  >
                    <p className="text-bold text-xl sm:text-[24px] text-white uppercase">
                      {service.title}
                    </p>
                    <p className="text-normal text-base sm:text-[18px] text-[#C3C0BF] pt-[8px] leading-[150%]">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================Yahoo================================= */}

      <section className="overflow-hidden">
        <div className="Yahoo_bg">
          <div className="container max-w-[1140px] m-auto px-3 relative z-30">
            <div className="md:pt-[147px] md:pb-[103px] py-[40px]">
              {/* Stat Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <div
                  className="flex flex-col items-center"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                >
                  <p className="text-bold text-[40px] md:text-[45px] lg:text-[52px] text-white">
                    21+
                  </p>
                  <p className="text-normal text-[20px] text-white text-center">
                    Creators under Management
                  </p>
                </div>

                <div
                  className="flex flex-col items-center"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <p className="text-bold text-[40px] md:text-[45px] lg:text-[52px] text-white">
                    $Millions
                  </p>
                  <p className="text-normal text-[20px] text-white text-center">
                    Generated by our creators in 2022
                  </p>
                </div>

                <div
                  className="flex flex-col items-center"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <p className="text-bold text-[40px] md:text-[45px] lg:text-[52px] text-white">
                    17
                  </p>
                  <p className="text-normal text-[20px] text-white text-center">
                    Team members
                  </p>
                </div>
              </div>

              {/* Divider with Text */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center pt-[60px] pb-[20px] gap-[12px]"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="border border-white w-[80%] sm:w-[20%] lg:w-[294px]"></span>
                <p className="text-bold text-xl md:text-[24px] text-white">
                  Our Creators have been featured in
                </p>
                <span className="border border-white w-[80%] sm:w-[20%] lg:w-[291px]"></span>
              </div>

              {/* Marquee Images */}
              <div
                className="flex gap-4 items-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Marquee>
                  <img src={YahooImg} alt="yahoo" />
                  <img src={YahooImg} alt="yahoo" />
                  <img src={YahooImg} alt="yahoo" />
                  <img src={YahooImg} alt="yahoo" />
                  <img src={YahooImg} alt="yahoo" />
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================TalentSlider=================== */}

      <section className="talent_bg overflow-hidden">
        {/* Heading */}
        <div className="pt-[50px] md:pt-[80px] lg:pt-[162px]">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-bold text-[28px] sm:text-[36px] lg:text-[44px] uppercase">
              our{" "}
              <span className="text-normal text-[#20B8F1] capitalize">
                successful
              </span>{" "}
              talents
            </p>
          </div>
        </div>

        {/* Slider */}
        <div
          className="container max-w-[1140px] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <Slider {...settings} className="pt-[49px] pb-[32px]">
            {TalentCardData.map((v, i) => (
              <div key={i} className="relative px-3">
                <img src={v.image} alt={v.image} className="w-full" />
                <p className="text-bold text-[24px] text-white absolute bottom-4 uppercase left-[100px]">
                  {v.title}
                </p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Button */}
        <div
          className="flex items-center justify-center mt-[38px]"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <Button btn_text="Book call now!" btn_clr="#20B8F1" />
        </div>
      </section>

      {/* ==================OnlyFans================== */}

      <section className="overflow-hidden">
        <div className="py-[50px] md:pt-[90px] lg:pt-[168px] lg:pb-[164px]">
          <div className="container max-w-[1140px] m-auto px-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
              {/* Left Box: fade-right */}
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="bg-white shadow-[0px_0px_20px_0px_#0000001A] border border-[#FCFCFF] rounded-tl-[32px] rounded-br-[32px] py-[44px] px-[32px]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[53px]">
                  <div className="flex flex-col items-center gap-[18px]">
                    <LandScapIcon />
                    <p className="text-bold text-[20px] text-center">
                      Complex Industry Landscape
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-[18px]">
                    <Qualityicon />
                    <p className="text-bold text-[20px] text-center">
                      Content Creation and Quality
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-[18px]">
                    <Competitionicon />
                    <p className="text-bold text-[20px] text-center">
                      Intense Competition
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-[18px]">
                    <PersonalizedIcon />
                    <p className="text-bold text-[20px] text-center">
                      Personalized Support
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Box: fade-left with delay */}
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="w-full md:w-[80%] mx-auto lg:w-full"
              >
                <p className="text-bold text-[28px] sm:text-[36px] mx-auto lg:text-[44px] uppercase leading-[118%] pb-[10px]">
                  Only Fans{" "}
                  <span className="text-normal text-[#20B8F1] capitalize">
                    isn't a walk
                  </span>{" "}
                  in the park.
                </p>
                <p className="text-normal text-base sm:text-[18px] text-[#4C4E55] leading-[145%]">
                  OnlyFans may not be easy, but with the right mindset and
                  support, you can overcome the challenges and achieve success
                  on the platform. Building a loyal subscriber base and
                  maximizing your earnings takes dedication, creativity, and
                  perseverance.
                </p>
                <p className="text-normal text-base sm:text-[18px] text-[#4C4E55] pt-[10px] leading-[145%]">
                  It's important to remember that success on OnlyFans is a
                  journey that requires hard work and a strategic approach. By
                  leveraging the services of our agency, you can access valuable
                  expertise, tailored guidance, and proven strategies to
                  navigate the complexities of OnlyFans and make the most of
                  your earning potential. With the right support and a
                  determination to excel, you can conquer the obstacles and
                  thrive on OnlyFans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================Timeline============= */}

      <section className="Timeline_bg lg:pe-3  overflow-hidden">
        <div className="grid gap-10 sm:gap-20 items-center grid-cols-1 lg:grid-cols-2">
          {/* Image with fade-right */}
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full sm:w-[80%]  mx-auto lg:w-full"
            src={TimelineGirl}
            alt="timeline"
          />

          {/* Text content with fade-left */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="lg:py-[84px] mx-auto w-full px-3 md:px-0 sm:w-[75%] lg:w-full"
          >
            <p className="text-bold text-[28px] sm:text-[36px] lg:text-[44px] text-white uppercase">
              what makes us{" "}
              <span className="text-normal capitalize">special</span>?
            </p>

            <div className="relative after:absolute after:contents-[] after:top-[20px] after:-left-[26px] after:bg-white after:h-[76%] xl:after:h-[80%] after:w-[2px]">
              {TimeLineData.map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={300 + i * 150}
                  className={`pt-[${i === 0 ? "16" : "30"}px] xl:pt-[${
                    i === 0 ? "29" : "55"
                  }px] relative ${i === 4 ? "pb-[36px]" : ""}`}
                >
                  <div
                    className={`h-[15px] absolute -left-8 w-[15px] bg-white rounded-full ${
                      i !== 0 ? "top-[39px]" : "top-[9px]"
                    }`}
                  />
                  <p className="text-bold text-[24px] text-white uppercase">
                    {item.title}
                  </p>
                  <p className="text-normal text-[18px] text-white">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Button btn_text="Book call now!" btn_clr="#18314F" />
          </div>
        </div>
      </section>

      {/* ====================Slider================= */}

      <div
        className="overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <SliderCard />
      </div>

      {/* ====================FAQ======================= */}

      <Faq />

      {/* ======================Getpaid================ */}

      <section className="overflow-hidden">
        <div className="getpaid_bg">
          <div className="container max-w-[1140px] m-auto px-3">
            <div className="flex flex-row py-[80px] md:py-[178px]">
              <div
                className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="text-bold text-[28px] sm:text-[36px] lg:text-[44px] text-white leading-[118%] uppercase">
                  refer your friends and{" "}
                  <span className="text-normal text-[#00AFEF] capitalize">
                    get paid
                  </span>
                </p>
                <p className="text-normal text-base sm:text-[18px] text-white pt-[10px] pb-[29px]">
                  Sharing the love has never been more rewarding! At Model
                  Makers Elite, we believe in the power of community. Refer your
                  friends to join our agency, and you'll not only strengthen our
                  vibrant community but also earn extra income for each
                  successful referral.
                </p>
                <Button btn_text="refer now" btn_clr="#00AFEF" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================OurTeam========================== */}

      <section className="OurTeam_bg overflow-hidden">
        <div className="py-[60px] md:pt-[169px] md:pb-[114px]">
          {/* Heading */}
          <p
            className="text-bold text-[28px] sm:text-[36px] lg:text-[44px] uppercase text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            latest{" "}
            <span className="text-normal text-[#00AFEF] capitalize">from</span>{" "}
            our team
          </p>

          {/* Cards Container */}
          <div className="container max-w-[1140px] m-auto px-3">
            <div className="flex flex-row flex-wrap gap-y-10 -mx-3 pt-[38px] pb-[46px]">
              {/* Card 1 */}
              <div
                className="w-full sm:w-6/12 lg:w-4/12 px-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="bg-white border border-white">
                  <img
                    width="100%"
                    src={SkyRocketImag}
                    alt="sky"
                    className="rounded-tl-[20px] rounded-tr-[20px]"
                  />
                  <p className="text-bold text-lg md:text-xl xl:text-[24px] uppercase pt-[27px] pb-[24px]">
                    10 Tips to Skyrocket Your OnlyFans Earnings
                  </p>
                  <button className="flex items-center gap-[16px] bg-white border border-white">
                    <p className="text-bold text-[16px] text-[#00AFEF] uppercase">
                      read more
                    </p>
                    <ReadMoreIcon />
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="w-full sm:w-6/12 lg:w-4/12 px-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-white border border-white">
                  <img
                    width="100%"
                    src={MyJourneyImag}
                    alt="sky"
                    className="rounded-tl-[20px] rounded-tr-[20px]"
                  />
                  <p className="text-bold text-lg md:text-xl xl:text-[24px] uppercase pt-[27px] pb-[24px]">
                    10k to 1000k: my journey of success
                  </p>
                  <button className="flex items-center gap-[16px] bg-white border border-white">
                    <p className="text-bold text-[16px] text-[#00AFEF] uppercase">
                      read more
                    </p>
                    <ReadMoreIcon />
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="w-full sm:w-6/12 lg:w-4/12 px-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="bg-white border border-white">
                  <img
                    width="100%"
                    src={EarningImg}
                    alt="sky"
                    className="rounded-tl-[20px] rounded-tr-[20px]"
                  />
                  <p className="text-bold text-lg md:text-xl xl:text-[24px] uppercase pt-[27px] pb-[24px]">
                    earning $100 per day is not much hard...
                  </p>
                  <button className="flex items-center gap-[16px] bg-white border border-white">
                    <p className="text-bold text-[16px] text-[#00AFEF] uppercase">
                      read more
                    </p>
                    <ReadMoreIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div
            className="flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <Button btn_text="show all" btn_clr="#00AFEF" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
