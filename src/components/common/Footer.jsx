import React from "react";
import Button from "./button";
import { FaceBookIcon, FooterLogo, InstaGramIcon, TwiterIcon } from "./Icon";

function Footer() {
  return (
    <>
      <section>
        <div className="footer_bg">
          <div className="flex flex-col items-center justify-center h-[100vh]">
            <p className="text-bold  text-[28px] sm:text-[36px] lg:text-[44px] text-white uppercase max-w-[517px] text-center leading-[118%]">
              be a part of the{" "}
              <span className="text-normal capitalize">thriving</span> community
            </p>
            <p className="text-normal text-base sm:text-[18px] text-white pt-[8px] pb-[31px] text-center max-w-[638px]">
              Ready to embark on a journey of excitement and luxury? Contact us
              today to discover the allure of our models or to explore the
              opportunities of joining our exclusive agency.
            </p>
            <Button btn_text="Apply now!" btn_clr="#18314F" />
          </div>
        </div>
        <div className="bg-black px-3">
          <div className="flex flex-col items-center justify-center pt-[76px]">
            <FooterLogo />
            <ul className="flex flex-wrap items-center gap-[34px] pt-[25px]">
              <li className="text-normal text-[14px] text-[#B0B1B6]">Home</li>
              <li className="text-normal text-[14px] text-[#B0B1B6]">
                About us
              </li>
              <li className="text-normal text-[14px] text-[#B0B1B6]">
                Talents
              </li>
              <li className="text-normal text-[14px] text-[#B0B1B6]">
                Referral Program
              </li>
              <li className="text-normal text-[14px] text-[#B0B1B6]">Blogs</li>
            </ul>
          </div>
          <div className="container max-w-[1140px] mx-auto px-3">
            <div className="flex flex-wrap gap-y-10 items-center justify-between pt-[43px] pb-[11px]">
              <div className="flex  items-center gap-5 sm:gap-[12px] ">
                <TwiterIcon inside_clr="#9095A642" outer_clr="#9095A642" />
                <FaceBookIcon inside_clr="#9095A642" outer_clr="#9095A642" />
                <InstaGramIcon inside_clr="#9095A642" outer_clr="#9095A642" />
              </div>
              <div className="flex items-center gap-[27px]">
                <p className="text-normal text-[16px] text-[#B0B1B6] ">
                  Terms of Service
                </p>
                <p className="text-normal text-[16px] text-[#B0B1B6] ">
                  Privacy policy
                </p>
              </div>
            </div>
          </div>
          <div className="border border-[#33353D] w-full "></div>
          <p className="text-normal text-[16px] text-[#B0B1B6] text-center py-[20px]">
            Copyright@2020 | All Rights Reserved
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
