import React from "react";
import ContentUser from "./ContentDB/ContentUser";
import EditUserOverlay from "./ContentDB/ContentUser/EditUserOverlay";
import HeaderDB from "./HeaderDB/HeaderDB";
import Menu from "./LeftMenu/Menu";

const DashboardUser = () => {
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

export default DashboardUser;
