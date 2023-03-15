import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { CgBell } from "react-icons/cg";
import { BsArrowDownShort } from "react-icons/bs";
import imgUser from "../../../assets/myPhoto1.jpg";
import { AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { useDispatch } from "react-redux";
import { userAction } from "../../../store/user/user";

const HeaderDB = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(userAction.logout());
  };

  const toggleMenuUser = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex bg-[#252525] text-white justify-between items-center px-4">
      <div className="flex items-center">
        <h2 className="flex items-center gap-2 text-3xl p-4 justify-center ">
          USER
        </h2>
      </div>

      <div className="p-2 rounded-full bg-[#131313] text-[#afafaf] flex items-center gap-2">
        <MdSearch size={20} />
        <input
          className=" outline-none bg-transparent w-full"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center gap-2 h-full">
        <button className="bg-[#131313] rounded-full p-2">
          <CgBell size={20} />
        </button>

        <div className="border-l border-[#afafaf] relative px-2">
          <button onClick={toggleMenuUser} className=" flex items-center gap-2">
            <img
              className=" w-[30px] h-[30px] rounded-full"
              src={imgUser}
              alt=""
            />
            <div>
              <p>Weeraluk</p>
              <p className="text-xs text-[#afafaf]">Super Admin</p>
            </div>
            <BsArrowDownShort />
          </button>

          {showMenu && (
            <div
              className="absolute right-0 block z-50 mt-5 mr-2 bg-[#252525] rounded-md w-11/12
          "
            >
              <a
                href="#"
                className="flex items-center py-3 px-6 justify-between"
              >
                Profile
                <AiOutlineUser />
              </a>
              <a
                href="#"
                className="flex items-center py-3 px-6 justify-between"
              >
                Setting
                <AiOutlineSetting />
              </a>
              <a className="flex items-center py-3 px-6 justify-between border-t border-[#afafaf]">
                <button onClick={onLogout}>Logout</button>
                <IoMdExit />
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderDB;
