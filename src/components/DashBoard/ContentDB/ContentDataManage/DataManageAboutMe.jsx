import React from "react";
import EducationList from "./EducationList";
import PersonalList from "./PersonalList";

const DataManageAboutMe = () => {
  return (
    <div className="border-b border-white">
      <h2 className=" text-2xl font-bold text-white">About Me</h2>
      <div className="p-4">
        <h2 className=" text-lg text-white/90 font-medium">Personal Info</h2>
        <PersonalList />
        <h2 className=" text-lg text-white/90 font-medium">Education</h2>
        <EducationList />
      </div>
    </div>
  );
};

export default DataManageAboutMe;
