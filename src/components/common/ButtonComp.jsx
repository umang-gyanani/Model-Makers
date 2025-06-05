import React from "react";
import { ButtonIcon } from "./Icon";
import { NavLink } from "react-router-dom";

const ButtonComp = ({ btn_clr, btn_text, link }) => {
  return (
    <div className=" inline-block">
      <NavLink
        to={link}
        style={{ background: btn_clr }}
        className={`flex items-center gap-[16px] border border-transparent rounded-[36px] py-3 px-6 sm:py-[18px] sm:px-[24px] cursor-pointer uppercase text-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:brightness-110`}
      >
        <span className=" text-white">{btn_text}</span>
        <ButtonIcon />
      </NavLink>
    </div>
  );
};

export default ButtonComp;
