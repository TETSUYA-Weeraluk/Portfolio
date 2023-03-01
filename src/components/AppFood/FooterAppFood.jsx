import React from "react";
import { HiPhone } from "react-icons/hi";
import { IoLogoFacebook, IoLogoGithub, IoMdMail } from "react-icons/io";
import line from "../../assets/line.png";
const FooterAppFood = () => {
  return (
    <div className="bg-orange-500 p-4 text-white" id="contact">
      <h1 className="text-center text-2xl">Contact Me</h1>
      <div className="flex flex-col gap-3 md:flex-row justify-center md:gap-5 p-2 md:p-4">
        <div className="flex justify-center">
          <a href="https://www.facebook.com/taeey.weerarak/" className="flex items-center gap-1">
            <IoLogoFacebook size={20} />
            <span> Weerarak Sopapan</span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="mailto:weeraluk.sopa@gmail.com"
            className="flex items-center gap-1"
          >
            <IoMdMail size={20} />
            <span> Weeraluk.sopa@gmail.com</span>
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="https://line.me/ti/p/W-AaUH8rQe"
            className="flex items-center gap-1"
          >
            <img src={line} className="w-[20px]" alt="" /> taeey.weerarak
          </a>
        </div>
        <div className="flex justify-center">
          <a href="tel:0640534466" className="flex items-center gap-1">
            <HiPhone size={20} /> (+66) 64-0534466
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="https://github.com/TETSUYA-Weeraluk"
            className="flex items-center gap-1"
          >
            <IoLogoGithub size={20} /> TETSUYA-Weeraluk
          </a>
        </div>
      </div>

      <h1 className="text-right mt-4 text-sm text-white/60">Design & Data : Code Commerce</h1>
    </div>
  );
};

export default FooterAppFood;
