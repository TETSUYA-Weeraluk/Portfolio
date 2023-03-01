import React from "react";
import { BiUser } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import {
  IoIosCalendar,
  IoLogoFacebook,
  IoLogoGithub,
  IoMdMail,
} from "react-icons/io";
import line from "../../../assets/line.png";

const AboutMePersonal = () => {
  return (
    <>
      <h1 className="font-bold text-3xl border-[#C4FFDD] my-2">Personal Info</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 text-sm text-[#dddddd]">
        <p className="flex items-center gap-1">
          <BiUser size={20} />
          Weeraluk Sopapan
        </p>
        <p className="flex items-center gap-1">
          <IoIosCalendar size={20} />
          08-07-1998
        </p>
        <a
          href="mailto:weeraluk.sopa@gmail.com"
          className="flex items-center gap-1"
        >
          <IoMdMail size={20} />
          <span>Weeraluk.sopa@gmail.com</span>
        </a>
        <a href="tel:0640534466" className="flex items-center gap-1">
          <HiPhone size={20} />(+66) 64-0534466
        </a>
        <a
          href="https://www.facebook.com/taeey.weerarak/"
          className="flex items-center gap-1"
        >
          <IoLogoFacebook size={20} />
          <span>Weerarak Sopapan</span>
        </a>
        <a
          href="https://line.me/ti/p/W-AaUH8rQe"
          className="flex items-center gap-1"
        >
          <img src={line} className="w-[20px]" alt="" /> taeey.weerarak{" "}
        </a>
        <a
          href="https://github.com/TETSUYA-Weeraluk"
          className="flex items-center gap-1"
        >
          <IoLogoGithub size={20} /> TETSUYA-Weeraluk
        </a>
      </div>
    </>
  );
};

export default AboutMePersonal;
