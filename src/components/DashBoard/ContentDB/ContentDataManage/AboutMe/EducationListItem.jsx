import React, { useState } from "react";
import EducationItem from "./EducationItem";

const EducationListItem = (props) => {
  const id = props.data.id_education;
  const column = Object.keys(props.data);
  const { degree, end_date, location_school, school_name, start_date } =
    props.data;
  return (
    <li className="flex flex-col gap-2">
      <EducationItem title={column[3]} descriptions={degree} id={id} />
      <EducationItem title={column[2]} descriptions={school_name} id={id} />
      <EducationItem title={column[6]} descriptions={location_school} id={id} />
      <div className="flex items-center gap-4">
        <EducationItem title={column[4]} descriptions={start_date} id={id} /> -{" "}
        <EducationItem title={column[5]} descriptions={end_date} id={id} />
      </div>
    </li>
  );
};

export default EducationListItem;
