import React from "react";
import bearLogo from "../../assets/bear.gif";
import ListNav from "./ListNav";


const NavbarHomePage = () => {
  return (
    <nav className="p-4" id="/">
      <div className="max-w-7xl mx-auto md:shadow-xl flex justify-between">
        {/* ฝั่งซ้าย */}
        <div className=" flex items-center md:px-4">
          <img src={bearLogo} alt="" className="w-[60px] rounded-full" />
          <h1 className="cursor-pointer text-lg font-bold">TETSUYA</h1>
        </div>
        
        {/* ฝั่งขวา */}
        <ListNav />
      </div>
    </nav>
  );
};

export default NavbarHomePage;
