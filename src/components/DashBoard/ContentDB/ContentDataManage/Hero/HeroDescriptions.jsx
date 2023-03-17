import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDataManagement } from "../../../../../store/Dashboard/DataManagement";
import ButtonCancelChangeData from "../ButtonCancelChangeData";
import ButtonChangeData from "../ButtonChangeData";
import ButtonConfirmChange from "../ButtonConfirmChange";

const HeroDescriptions = (props) => {
  const { descriptions , id_hero } = props.data[0];
  const showInputChangDescriptions = props.showInputChangDescriptions;
  const [descriptionsHero, setDescriptionsHero] = useState(descriptions);
  const setShowInputChangDescriptions = props.setShowInputChangDescriptions;
  const dispatch = useDispatch();

  const confirmChangeDataHandler = () => {
    const data = {
      table: "hero",
      title: "descriptions",
      value: descriptionsHero,
      id_table: "id_hero",
      id: id_hero,
    };  
    dispatch(updateDataManagement(data))
    setShowInputChangDescriptions(false);
  };

  return (
    <>
      {showInputChangDescriptions ? (
        <>
          <input
            className=" bg-transparent border px-2 w-1/2"
            type="text"
            value={descriptionsHero}
            onChange={(e) => setDescriptionsHero(e.target.value)}
          />
          <ButtonConfirmChange
            confirmChangeDataHandler={confirmChangeDataHandler}
          />
          <ButtonCancelChangeData showInput={setShowInputChangDescriptions} />
        </>
      ) : (
        <>
          <span>{descriptions}</span>
          <ButtonChangeData showInput={setShowInputChangDescriptions} />
        </>
      )}
    </>
  );
};

export default HeroDescriptions;
