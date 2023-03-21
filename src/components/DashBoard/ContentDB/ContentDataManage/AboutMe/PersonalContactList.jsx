import React from "react";
import { useSelector } from "react-redux";
import PersonalContactItem from "./PersonalContactItem";

const PersonalContactList = () => {
  const dataPersonal = useSelector((state) => state.dataManage.data.contact);
  return (
    <>
      {dataPersonal !== undefined ? (
        dataPersonal.map((data, index) => (
          <PersonalContactItem key={index} data={data} />
        ))
      ) : (
        <>
          <li>No data</li>
        </>
      )}
    </>
  );
};

export default PersonalContactList;
