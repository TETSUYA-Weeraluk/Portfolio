import React from "react";
import { useSelector } from "react-redux";
import EducationListItem from "./EducationListItem";

const EducationList = () => {
  const dataEducation = useSelector((state) => state.dataManage.data.education);
  return (
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4">
      {dataEducation !== undefined &&
        dataEducation.map((data) => (
          <EducationListItem key={data.id_education} data={data} />
        ))}
    </ul>
  );
};

export default EducationList;
