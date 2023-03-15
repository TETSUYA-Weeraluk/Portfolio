import React from "react";
import DataManageAboutMe from "./ContentDataManage/DataManageAboutMe";
import DataManageHero from "./ContentDataManage/DataManageHero";
import DataManagePortfolio from "./ContentDataManage/DataManagePortfolio";
import DataManageSkill from "./ContentDataManage/DataManageSkill";

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
