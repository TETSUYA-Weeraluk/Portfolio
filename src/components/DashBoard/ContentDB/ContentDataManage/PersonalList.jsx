import React from "react";
import { useSelector } from "react-redux";
import PersonalListItem from "./PersonalListItem";

const PersonalList = () => {
    const personalinfo = useSelector(state => state.dataManage.data[1])
    console.log(personalinfo)
  return (
    <ul className="grid grid-cols-2 gap-4 p-4">
      { personalinfo !== undefined ? personalinfo.map((data) => (
        <PersonalListItem key={data.id_personalInfo} data={data} />
      )) : <>
      <li>test</li>
      </>}
    </ul>
  );
};

export default PersonalList;
