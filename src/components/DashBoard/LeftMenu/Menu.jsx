import React, { useState } from "react";
import bearLogo from "../../../assets/bear-hat.png";

import { IoMdMenu } from "react-icons/io";
import ListNav from "./ListNav";
const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#252525] h-auto">
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

      {showMenu && <ListNav />}
    </div>
  );
};

export default Menu;
