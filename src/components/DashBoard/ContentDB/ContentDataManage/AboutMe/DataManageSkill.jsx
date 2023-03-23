import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ButtonAddData from "../ButtonAddData";
import OverlaySkill from "./OverlaySkill";
import SkillListItem from "./SkillListItem";

const DataManageSkill = () => {
  const dataSkill = useSelector((state) => state.dataManage.data.skill);
  const [showOverlay, setShowOverlay] = useState(false);
  const [listItemSkill, setListItemSkill] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const res = await fetch(
          "http://localhost:7777/api/dashboard/selectItemSkill"
        );
        if (!res.ok) {
          throw new Error("Request Item skill fail");
        }
        const data = await res.json();
        setListItemSkill(data);
      } catch (error) {
        console.log(error);
      }
    };
    sendRequest();
  }, []);
  return (
    <div className="border-b border-white">
      {showOverlay && (
        <OverlaySkill showOverlay={setShowOverlay} data={listItemSkill} />
      )}
      <h2 className=" text-2xl font-bold text-white">Skill</h2>
      <div className="grid grid-cols-3 p-4 gap-5">
        {dataSkill !== undefined &&
          dataSkill.map((data) => (
            <SkillListItem key={data.id_skill} data={data} />
          ))}
        <div className="mx-auto p-4">
          <ButtonAddData showOverlay={setShowOverlay} />
        </div>
      </div>
    </div>
  );
};

export default DataManageSkill;
