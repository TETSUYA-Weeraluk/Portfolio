import React from "react";
import ContentUser from "../../components/DashBoard/ContentDB/ContentUser";
import HeaderDB from "../../components/DashBoard/HeaderDB/HeaderDB";
import Menu from "../../components/DashBoard/LeftMenu/Menu";

const DashBoardHomePage = () => {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="w-full">
        <HeaderDB />
        <ContentUser />
      </div>
    </div>
  );
};

export default DashBoardHomePage;
