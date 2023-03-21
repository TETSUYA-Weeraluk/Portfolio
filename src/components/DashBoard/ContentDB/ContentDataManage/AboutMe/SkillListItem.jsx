import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDataManagement } from "../../../../../store/Dashboard/DataManagement";
import ButtonCancelChangeData from "../ButtonCancelChangeData";
import ButtonChangeData from "../ButtonChangeData";
import ButtonConfirmChange from "../ButtonConfirmChange";

const SkillListItem = (props) => {
  const id = props.data.id_skill;
  const link_icons = props.data.icons_skill;
  const [valueInput, setValueInput] = useState(link_icons);
  const [showInputChange, setShowInputChange] = useState(false);
  const dispatch = useDispatch();

  const confirmChangeDataHandler = () => {
    const data = {
      table: "skill_item",
      title: "icons_skill",
      value: valueInput,
      id_table: "id_skill_item",
      id: id,
    };
    dispatch(updateDataManagement(data));
    setShowInputChange(false);
  };

  return (
    <div className="flex flex-col gap-3 items-center mx-auto w-full">
      {showInputChange ? (
        <>
          <img className="h-[50px]" src={valueInput} border="0" />
          <input
            className=" bg-transparent border px-2 w-full"
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <div className="flex items-center ">
            <ButtonConfirmChange
              confirmChangeDataHandler={confirmChangeDataHandler}
            />
            <ButtonCancelChangeData showInput={setShowInputChange} />
          </div>
        </>
      ) : (
        <>
          <img className="h-[50px]" src={valueInput} border="0" />
          <ButtonChangeData showInput={setShowInputChange} />
        </>
      )}
    </div>
  );
};

export default SkillListItem;
