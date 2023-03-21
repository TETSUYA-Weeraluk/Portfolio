import React, { useState } from "react";
import { useSelector } from "react-redux";
import PersonalListItem from "./PersonalListItem";

const PersonalList = () => {
  const dataPersonal = useSelector((state) => state.dataManage.data.personal);
  const dataIcons = useSelector(
    (state) => state.dataManage.data.icons_personal
  );

  let data;
  if (dataPersonal) {
    data = Object.entries(dataPersonal);
  }

  return (
    <>
      {dataPersonal !== undefined ? (
        data.map((data, index) => (
          <PersonalListItem
            key={index}
            id={dataPersonal.id_personal}
            data={data}
            icons={dataIcons}
          />
        ))
      ) : (
        <>
          <li>No data</li>
        </>
      )}
    </>
  );
};

export default PersonalList;
