import React from "react";
import { useSelector } from "react-redux";
import PersonalListItem from "./PersonalListItem";

const PersonalList = () => {
  const personalinfo = useSelector((state) => state.dataManage.data.personal);
  let data
  if(personalinfo){
    data = Object.entries(personalinfo)
  }

  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4">
      { personalinfo !== undefined ? data.map((data , index) => (
        <PersonalListItem key={index} id={personalinfo.id} data={data} />
      )) : <>
      <li>test</li>
      </>}
    </ul>
  );
};

export default PersonalList;
