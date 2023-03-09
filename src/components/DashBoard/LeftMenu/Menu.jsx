import React, { useState } from "react";
import bearLogo from "../../../assets/bear-hat.png";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#252525] relative h-full">
      <div className="flex items-center p-4 gap-2 ">
        <IoMdMenu size={20} color="white" onClick={onClickShowMenu} />
        {showMenu && (
          <div className="flex items-center gap-2 text-3xl justify-center w-80">
            <img className="w-[30px]" src={bearLogo} alt="" />
            <p className="text-white">
              Dash<span className="text-[#FD7014]">board</span>
            </p>
          </div>
        )}
      </div>

      {showMenu && (
        <div className="p-4 text-white flex flex-col gap-5 text-lg">
          <p className="flex items-center gap-5">
            <MdOutlineDashboard size={25} />
            <label>Dashboard</label>
          </p>

          <p className="flex items-center gap-5 text-[#FD7014]">
            <AiOutlineUser size={25} />
            <label>User</label>
          </p>
        </div>
      )}
    </div>
  );
};

export default Menu;
