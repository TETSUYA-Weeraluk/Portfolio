import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDataManagement } from "../../../../../store/Dashboard/DataManagement";
import ButtonCancelChangeData from "../ButtonCancelChangeData";
import ButtonChangeData from "../ButtonChangeData";
import ButtonConfirmChange from "../ButtonConfirmChange";
const HeroSubTitle = (props) => {
  const { sub_title, id_hero } = props.data[0];
  const showInputChangSubTitle = props.showInputChangSubTitle;
  const [subTitleHero, setSubtitleHero] = useState(sub_title);
  const setShowInputChangSubTitle = props.setShowInputChangSubTitle;
  const dispatch = useDispatch();

  const confirmChangeDataHandler = () => {
    const data = {
      table: "hero",
      title: "sub_title",
      value: subTitleHero,
      id_table: "id_hero",
      id: id_hero,
    };
    dispatch(updateDataManagement(data));
    setShowInputChangSubTitle(false);
  };

  return (
    <>
      {showInputChangSubTitle ? (
        <>
          <input
            className=" bg-transparent border px-2 w-1/2"
            type="text"
            value={subTitleHero}
            onChange={(e) => setSubtitleHero(e.target.value)}
          />
          <ButtonConfirmChange
            confirmChangeDataHandler={confirmChangeDataHandler}
          />
          <ButtonCancelChangeData showInput={setShowInputChangSubTitle} />
        </>
      ) : (
        <>
          <span>{sub_title}</span>
          <ButtonChangeData showInput={setShowInputChangSubTitle} />
        </>
      )}
    </>
  );
};

export default HeroSubTitle;
