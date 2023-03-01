import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DarkModeHeader } from "./DarkModeCss";
import ButtonChangeDarkMode from "./UI/ButtonChangeDarkMode";
import {BsArrowLeft} from 'react-icons/bs'
const HeaderCountry = () => {
  const isDarkMode = useSelector((state) => state.country.isDarkMode);
  const history = useNavigate()
  return (
    <nav className={`${isDarkMode ? DarkModeHeader : ""} shadow-md p-4 `}>
      <div
        className={`${
          isDarkMode ? DarkModeHeader : ""
        } max-w-7xl flex justify-between mx-auto`}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={()=>history(-1)}
            className="bg-[#202c37] text-white px-3 py-1 rounded-lg"
          >
            <BsArrowLeft />
          </button>
          <h1 className="font-bold">Where in the world?</h1>
        </div>
        <ButtonChangeDarkMode />
      </div>
    </nav>
  );
};

export default HeaderCountry;
