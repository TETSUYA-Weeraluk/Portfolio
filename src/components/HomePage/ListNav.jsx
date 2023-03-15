import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListItemNavbarHomePage from "./ListItemNavbarHomePage";
import { BiMenu } from "react-icons/bi";

const ListNav = () => {
  const currentUser = useSelector((state) => state.user.isLogin);
  const [role, setRole] = useState();
  const [navIsShow, setNavIsShow] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:7777/api/users/checkuser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: currentUser }),
          }
        );

        if (!response.ok) {
          throw new Error("Request Fail");
        }

        const dataRes = await response.json();
        setRole(dataRes.role);
      } catch (error) {
        console.log(error);
      }
    };
    checkUser();
  }, [currentUser]);

  const listItemNav = [
    { id: 1, to: "/", title: "Home" },
    {
      id: 2,
      to: "AboutMe",
      title: "About Me",
    },
    {
      id: 3,
      to: "Portfolio",
      title: "Portfolio",
    },
  ];

  let dashboardIsShow = <></>;

  if (role) {
    dashboardIsShow = (
      <Link
        to={"/dashboard-admin"}
        className="hover:border-b-2 border-[#062743]"
      >
        Dashboard
      </Link>
    );
  }

  const navIsShowToggle = () => {
    setNavIsShow(!navIsShow)
  }

  return (
    <div className="flex items-center md:px-4">
      <ul className="sm:flex gap-3 md:gap-5 hidden">
        {role !== null && dashboardIsShow}
        {listItemNav.map((listItem) => (
          <ListItemNavbarHomePage key={listItem.id} data={listItem} />
        ))}
      </ul>

      <BiMenu className="sm:hidden block" onClick={navIsShowToggle} size={20} />

      {navIsShow && (
        <>
          <div className="sm:hidden fixed bg-black/70 top-0 left-0 right-0 bottom-0 z-10"></div>
          <div onClick={navIsShowToggle} className="sm:hidden fixed left-0 right-0 top-0 bottom-0 z-20  flex items-center justify-center">
            <ul className="py-4 px-10 flex flex-col gap-5 bg-[#062743] text-[#F9F9F9] rounded items-center shadow-lg shadow-white/30 border border-white">
              {role !== null && dashboardIsShow}
              {listItemNav.map((listItem) => (
                <ListItemNavbarHomePage key={listItem.id} data={listItem} />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ListNav;
