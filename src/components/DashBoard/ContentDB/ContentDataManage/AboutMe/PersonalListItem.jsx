import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDataManagement } from "../../../../../store/Dashboard/DataManagement";
import ButtonCancelChangeData from "../ButtonCancelChangeData";
import ButtonChangeData from "../ButtonChangeData";
import ButtonConfirmChange from "../ButtonConfirmChange";

const PersonalListItem = (props) => {
  const icons = props.icons;
  const dataPersonal = props.data;
  const title = props.data[0];
  const id = props.id;
  const [valueInput, setValueInput] = useState(dataPersonal[1]);
  const [showInputChange, setShowInputChange] = useState(false);
  const dispatch = useDispatch();


  const confirmChangeDataHandler = () => {
    const data = {
      table: "personal",
      title: title,
      value: valueInput,
      id_table: "id_personal",
      id: id,
    };
    dispatch(updateDataManagement(data));
    setShowInputChange(false);
  };

  let listItem = <></>;

  if (icons && dataPersonal) {
    const icon = icons.filter((data) => data.title === dataPersonal[0]);
    if (dataPersonal[0] === "person_image") {
      listItem = (
        <li className="flex flex-col  gap-2">
          <img className="w-[300px]" src={valueInput} alt="" />
          {showInputChange ? (
            <div className="w-1/2 flex items-center">
              <input
                className=" bg-transparent border px-2 w-full"
                type="text"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
              <ButtonConfirmChange
                confirmChangeDataHandler={confirmChangeDataHandler}
              />
              <ButtonCancelChangeData showInput={setShowInputChange} />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>{dataPersonal[1]}</span>
              <ButtonChangeData showInput={setShowInputChange} />
            </div>
          )}
        </li>
      );
    }
    if (icon[0]) {
      listItem = (
        <li className="flex items-center gap-2">
          <img className="w-[20px]" src={icon[0].link_img} alt="" />
          {showInputChange ? (
            <div className="w-1/2 flex items-center">
              <input
                className=" bg-transparent border px-2 w-full"
                type="text"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
              <ButtonConfirmChange
                confirmChangeDataHandler={confirmChangeDataHandler}
              />
              <ButtonCancelChangeData showInput={setShowInputChange} />
            </div>
          ) : (
            <>
              <span>{dataPersonal[1]}</span>
              <ButtonChangeData showInput={setShowInputChange} />
            </>
          )}
        </li>
      );
    }
  }

  return <>{listItem}</>;
};

export default PersonalListItem;
