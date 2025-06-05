import React, { useState} from "react";
import { CrossIcon, LogoIcon, MenuIcon } from "./common/Icon";
import Button from "../components/common/Button";
import { Link, useLocation } from "react-router-dom";
import HeaderSvg from "../assets/image/svg/header_svg.svg";
import { HeaderData } from "./common/DummyData";
import home_img from "../assets/image/png/header_img.png";
import about_img from "../assets/image/png/about_img.png";
import talents_img from "../assets/image/png/talents_img.png";
import raffrel_img from "../assets/image/png/referrel_img.png";
import blog_img from "../assets/image/png/blog_img.png";
import CountUp from "react-countup";
import ButtonComp from "./common/ButtonComp";

const Header = () => {
  const [shownav, setShownav] = useState(false);
  const location = useLocation();

  const bgImage =
    location.pathname === "/about"
      ? about_img
      : location.pathname === "/talents"
      ? talents_img
      : location.pathname === "/referrel"
      ? raffrel_img
      : location.pathname === "/blogs"
      ? blog_img
      : home_img;

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`${
        location.pathname !== "/blogdeltailes" &&
        "min-h-screen bg-cover bg-[75%] xl:bg-center flex flex-col"
      }`}
    >
      {/* Header Navbar */}
      <div className="bg-[#18314F0F] backdrop-blur-md fixed w-full z-50 top-0 left-0">
        <div className="container max-w-[1140px] mx-auto px-3">
          <nav className="flex justify-between items-center py-[10px]">
            <Link to={"/"} className="w-[250px]">
              <LogoIcon />
            </Link>

            <div>
              <ul
                className={`flex items-center max-lg:fixed max-lg:top-[76px] lg:text-white text-[#00AFEF] ${
                  shownav ? "max-lg:left-0" : "max-lg:-left-full"
                } max-lg:bg-white max-lg:z-50 max-lg:w-full max-lg:h-[calc(100vh-76px)] gap-[32px] max-lg:flex-col max-lg:items-center max-lg:justify-center duration-700`}
              >
                <li>
                  <Link
                    to={"/about"}
                    onClick={() => setShownav(false)}
                    className={`${
                      location.pathname === "/about" && " text-[#00AFEF]"
                    } font-normal text-[16px]`}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/talents"}
                    onClick={() => setShownav(false)}
                    className={`${
                      location.pathname === "/talents" && " text-[#00AFEF]"
                    } font-normal text-[16px]`}
                  >
                    Talents
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/referrel"}
                    onClick={() => setShownav(false)}
                    className={`${
                      location.pathname === "/referrel" && " text-[#00AFEF]"
                    } font-normal text-[16px]`}
                  >
                    Referral Program
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/blogs"}
                    onClick={() => setShownav(false)}
                    className={`${
                      location.pathname === "/blogs" && " text-[#00AFEF]"
                    } font-normal text-[16px]`}
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Button
                    btn_text="Apply Now"
                    btn_clr="#18314F"
                    link="/blogdeltailes"
                  />
                </li>
              </ul>
              <button
                onClick={() => setShownav(!shownav)}
                className="lg:hidden"
              >
                {shownav ? <MenuIcon /> : <CrossIcon />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section with AOS */}
      {location.pathname !== "/blogdeltailes" && (
        <>
          {HeaderData.filter(
            (v) => v.path.toLowerCase() === location.pathname.toLowerCase()
          ).map((v, index) => {
            return (
              <section
                key={index}
                className="grow flex items-stretch md:mt-[60px] lg:mt-[76px]"
              >
                <div className="container max-w-[1140px] m-auto px-3">
                  <div className="flex flex-row h-full">
                    <div className="w-full md:w-8/12 lg:w-[54%]">
                      <p
                        data-aos="fade-up"
                        className="font-bold text-[28px] sm:text-[30px] lg:text-[44px] uppercase md:text-[56px] text-black leading-[110%] text-start"
                      >
                        {v.first_text}{" "}
                        <span className="text-[#00AFEF]">{v.span_text}</span>{" "}
                        {v.last_text}
                      </p>

                      <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="font-normal text-[18px] text-[#4D4F55] pt-[8px] pb-5 sm:pb-[36px] text-start"
                      >
                        {v.Discription}
                      </p>

                      <div data-aos="zoom-in" data-aos-delay="400">
                        <ButtonComp btn_text="Book Call Now" btn_clr="#20B8F1" />
                      </div>

                      {location.pathname === "/" && (
                        <div
                          data-aos="fade-up"
                          data-aos-delay="600"
                          className="flex items-center gap-[11px] mt-12 md:mt-[131px]"
                        >
                          <img src={HeaderSvg} alt="headersvg" />
                          <p className="font-bold text-[24px]">
                            +<CountUp end={53} duration={5} /> creators
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </>
      )}
    </div>
  );
};

export default Header;
