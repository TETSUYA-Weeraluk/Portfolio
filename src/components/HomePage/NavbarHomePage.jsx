import React from "react";
import bearLogo from "../../assets/bear.gif";
import { Link as Scrolling } from "react-scroll";

const NavbarHomePage = () => {
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto md:shadow-xl flex justify-between">
        <div className=" flex items-center">
          <img src={bearLogo} alt="" className="w-[60px] rounded-full" />
          <h1 className="cursor-pointer text-lg font-bold">TETSUYA</h1>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-3 md:gap-5">
            <li>
              <Scrolling
                to="/"
                smooth='true'
                duration={700}
                className="hover:border-b-2 border-[#062743]"
              >
                Home
              </Scrolling>
            </li>
            <li>
              <Scrolling
                to="AboutMe"
                smooth="true"
                duration={700}
                className="hover:border-b-2 border-[#062743]"
              >
                About Me
              </Scrolling>
            </li>
            <li>
              <Scrolling
                to="Portfolio"
                smooth="true"
                duration={700}
                className="hover:border-b-2 border-[#062743]"
              >
                Portfolio
              </Scrolling>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHomePage;
