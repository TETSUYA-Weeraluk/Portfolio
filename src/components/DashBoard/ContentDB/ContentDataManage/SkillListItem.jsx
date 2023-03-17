import React from "react";

const SkillListItem = (props) => {
  return (
    <img
      className="h-[50px]"
      src={props.data.skill_icon}
      border="0"
    />
  );
};

export default SkillListItem;
