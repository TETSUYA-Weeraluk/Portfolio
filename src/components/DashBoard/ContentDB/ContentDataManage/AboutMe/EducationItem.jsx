import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDataManagement } from "../../../../../store/Dashboard/DataManagement";
import ButtonCancelChangeData from "../ButtonCancelChangeData";
import ButtonChangeData from "../ButtonChangeData";
import ButtonConfirmChange from "../ButtonConfirmChange";

const EducationItem = (props) => {
  const title = props.title;
  const descriptions = props.descriptions;
  const id = props.id;
  const [showInPutChange, setShowInPutChange] = useState(false);
  const [valueInput, setValueInput] = useState(props.descriptions);
  const dispatch = useDispatch();

  const confirmChangeDataHandler = () => {
    const data = {
      table: "education",
      title: title,
      value: valueInput,
      id_table: "id_education",
      id: id,
    };
    dispatch(updateDataManagement(data));
    setShowInPutChange(false);
  };

  return (
    <div className="flex gap-2">
      {showInPutChange ? (
        <>
          <input
            className=" bg-transparent border px-2 w-1/2"
            type="text"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <ButtonConfirmChange
            confirmChangeDataHandler={confirmChangeDataHandler}
          />
          <ButtonCancelChangeData showInput={setShowInPutChange} />
        </>
      ) : (
        <>
          <span>{descriptions}</span>
          <ButtonChangeData showInput={setShowInPutChange} />
        </>
      )}
    </div>
  );
};

export default EducationItem;
