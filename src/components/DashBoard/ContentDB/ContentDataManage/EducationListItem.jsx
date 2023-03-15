import React from "react";

const EducationListItem = (props) => {
  const { academy, academy_address, acdemy_year, education_major } = props.data;
  return (
    <li className="flex flex-col gap-2">
      <p>{education_major}</p>
      <p>{academy}</p>
      <p>{academy_address}</p>
      <p>{acdemy_year}</p>
    </li>
  );
};

export default EducationListItem;
