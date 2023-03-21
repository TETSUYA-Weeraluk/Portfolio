import React from "react";
import { useSelector } from "react-redux";
import SkillListItem from "./SkillListItem";

const DataManageSkill = () => {
  const dataSkill = useSelector((state) => state.dataManage.data.skill);
  return (
    <div className="border-b border-white">
      <h2 className=" text-2xl font-bold text-white">Skill</h2>
      <div className="grid grid-cols-3 p-4 gap-5">
        {dataSkill !== undefined && dataSkill.map((data) => (
          <SkillListItem key={data.id_skill} data={data} />
        ))}
      </div>
    </div>
  );
};

export default DataManageSkill;
