import React, { useState } from "react";
import { FaqIcon } from "./Icon";
import { FaqData } from "./DummyData";
const Faq = () => {
  const [faqs, setFaqs] = useState(null);

  function onhadelclick(i) {
    if (faqs === i) setFaqs(null);
    else setFaqs(i);
  }

  return (
    <>
      {/* ====================FAQ======================= */}
      <section className="pb-[60px] lg:py-[132px] overflow-hidden">
        <div className="container max-w-[1140px] m-auto px-3">
          <div className="grid gap-[69px] lg:grid-cols-2 grid-cols-1">
            {/* Title */}
            <div data-aos="fade-right" data-aos-duration="1000">
              <p className="text-bold text-[28px] sm:text-[36px] lg:text-[44px] uppercase">
                frequently asked{" "}
                <span className="text-normal text-[#008CCF] capitalize">
                  questions
                </span>
              </p>
            </div>

            {/* FAQ Items */}
            <div className="flex flex-col gap-y-6 w-full">
              {FaqData.map((v, i) => {
                return (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 150} // stagger animation by 150ms per item
                    data-aos-duration="800"
                  >
                    <div
                      className={`flex items-center justify-between ${
                        i !== 0 ? "mt-[15px]" : "mt-[0px]"
                      }`}
                      onClick={() => onhadelclick(i)}
                    >
                      <p className="text-bold text-[20px]">{v.title}</p>
                      <div
                        className={`${faqs === i ? "-rotate-180" : "rotate-0"}`}
                      >
                        <FaqIcon />
                      </div>
                    </div>
                    <div
                      className={`${
                        faqs === i ? "max-h-[200px]" : "max-h-[0px]"
                      } overflow-hidden transition-all duration-700`}
                    >
                      <p className="text-normal text-[18px] text-[#4C4E55] mt-[8px]">
                        {v.Discription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
