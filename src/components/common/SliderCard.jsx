import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CreaterSlideData } from "./DummyData";

const SliderCard = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="Creator_sliderbg py-20">
      <div>
        <p className="font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-center uppercase mb-10">
          what our creators{" "}
          <span className="font-normal text-[#008CCF] capitalize">say</span>
        </p>
        <div className="-mx-3">
          <Slider {...settings}>
            {CreaterSlideData.map((v, index) => {
              const isExpanded = expandedCard === index;
              const displayText = isExpanded
                ? v.description
                : v.description.slice(0, 348) + "...";

              return (
                <div key={index} className="px-3">
                  <div className="bg-white shadow-[0px_0px_10px_0px_#0000001A] my-3 rounded-[20px] p-[24px]  xl:h-[315px]">
                    <div className="flex flex-col lg:flex-row gap-[20px]">
                      <img
                        src={v.image}
                        alt={v.title}
                        className="w-[100px] h-[100px] object-cover rounded-full"
                      />
                      <div className="flex flex-col">
                        <p className="font-bold text-[20px] mb-2">{v.title}</p>
                        <p className="font-normal text-[18px] text-[#4C4E55] leading-7">
                          {displayText}{" "}
                          <button
                            onClick={() => toggleCard(index)}
                            className="border-b border-dotted"
                          >
                            {isExpanded ? "Read Less" : "Read More"}
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderCard;
