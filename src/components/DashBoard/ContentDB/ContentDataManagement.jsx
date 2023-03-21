import React from "react";
import DataManageAboutMe from "./ContentDataManage/AboutMe/DataManageAboutMe";
import DataManageSkill from "./ContentDataManage/AboutMe/DataManageSkill";
import DataManageHero from "./ContentDataManage/Hero/DataManageHero";
import DataManagePortfolio from "./ContentDataManage/Portfolio/DataManagePortfolio";

const ContentDataManagement = () => {
  return (
    <div className="w-full h-auto text-white/70 p-4">
      <div className="flex flex-col gap-5">
        <DataManageHero />
        <DataManageAboutMe />
        <DataManageSkill />
        <DataManagePortfolio />
      </div>
    </div>
  );
};

export default ContentDataManagement;
