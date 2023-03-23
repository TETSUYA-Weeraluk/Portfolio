import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDataManagement } from "../../../../../store/Dashboard/DataManagement";
import ButtonCancelChangeData from "../ButtonCancelChangeData";
import ButtonChangeData from "../ButtonChangeData";
import ButtonConfirmChange from "../ButtonConfirmChange";
const HeroTitle = (props) => {
  const { title, id_hero, descriptions } = props.data;
  const [showInputChang, setShowInputChang] = useState(false);
  const [valueInput, setValueInput] = useState(descriptions);

  const dispatch = useDispatch();

  const confirmChangeDataHandler = () => {
    const data = {
      table: "hero",
      title: "descriptions",
      value: valueInput,
      id_table: "id_hero",
      id: id_hero,
    };
    dispatch(updateDataManagement(data));
    setShowInputChang(false);
  };

  let content;

  if (title === "Image_hero") {
    content = (
      <>
        <img className="w-[300px] mb-2" src={valueInput} alt="" />
        <span>{title} : </span>
        {showInputChang ? (
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
            <ButtonCancelChangeData showInput={setShowInputChang} />
          </>
        ) : (
          <>
            <span className="mr-2">{descriptions}</span>
            <ButtonChangeData showInput={setShowInputChang} />
          </>
        )}
      </>
    );
  } else {
    content = (
      <>
        <span>{title} : </span>
        {showInputChang ? (
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
            <ButtonCancelChangeData showInput={setShowInputChang} />
          </>
        ) : (
          <>
            <span className="mr-2">{descriptions}</span>
            <ButtonChangeData showInput={setShowInputChang} />
          </>
        )}
      </>
    );
  }

  return <li>{content}</li>;
};

export default HeroTitle;
