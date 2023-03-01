import React from "react";
import { useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { DarkModeHeader } from "../DarkModeCss";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";


const ButtonBack = () => {
    const isDarkMode = useSelector(state=>state.country.isDarkMode)
    const history = useNavigate()
    return (
    <button
      className={`${isDarkMode ? DarkModeHeader : ""} shadow-md rounded-md`}
    >
      <button onClick={() => history(-1)} className="flex items-center gap-2 py-2 px-6">
        <HiOutlineArrowNarrowLeft />
        <span>Back</span>
      </button>
    </button>
  );
};

export default ButtonBack;
