import React, { useEffect, useState } from "react";
import bearLogo from "../../assets/bear.gif";
import ListNav from "./ListNav";

const NavbarHomePage = () => {
  const [navStyle , setNavStyle] = useState();

  const handleScroll = () => {
    window.scrollY > 10 ? setNavStyle('fixed bg-[#062743] w-full px-4 py-1 shadow-lg shadow-white/10  '): setNavStyle('p-4')
};

useEffect(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);

  return (
    <nav className="" id="/">
      <div className={`max-w-7xl mx-auto md:shadow-xl flex justify-between ${navStyle}`}>
        {/* ฝั่งซ้าย */}
        <div className=" flex items-center md:px-4 gap-2">
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
