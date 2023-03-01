import React from 'react'
import { HiPhone } from "react-icons/hi";
import { IoLogoFacebook, IoLogoGithub, IoMdMail } from "react-icons/io";
import line from '../../../assets/line.png'

const ListContactMe = () => {
  return (
    <div className="flex sm:grid-cols-2 md:grid-cols-3 gap-5 p-4">
        <div className="flex justify-center">
          <a
            href="https://www.facebook.com/taeey.weerarak/"
            className="flex items-center gap-1"
          >
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
  )
}

export default ListContactMe