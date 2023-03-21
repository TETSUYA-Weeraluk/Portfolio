import React from "react";
import PersonalList from "./PersonalList";
import PersonalContactList from "./PersonalContactList";
import EducationList from "./EducationList";
const DataManageAboutMe = () => {
  return (
    <div className="border-b border-white">
      <h2 className=" text-2xl font-bold text-white">About Me</h2>
      <div className="p-4">
        <h2 className=" text-lg text-white/90 font-medium">Personal Info</h2>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4">
          <PersonalList />
          <PersonalContactList />
        </ul>
        <h2 className=" text-lg text-white/90 font-medium">Education</h2>
        <EducationList />
      </div>
    </div>
  );
};

export default DataManageAboutMe;
