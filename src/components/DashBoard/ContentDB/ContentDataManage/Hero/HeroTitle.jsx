import React ,{useState } from "react";
import { useDispatch } from "react-redux";
import { updateDataManagement } from "../../../../../store/Dashboard/DataManagement";
import ButtonCancelChangeData from "../ButtonCancelChangeData";
import ButtonChangeData from "../ButtonChangeData";
import ButtonConfirmChange from "../ButtonConfirmChange";
const HeroTitle = (props) => {
  const { title , id_hero ,  } = props.data[0];
  const showInputChangTitle = props.showInputChangTitle;
  const [titleHero, setTitleHero] = useState(title);
  const setShowInputChangTitle = props.setShowInputChangTitle;
  const dispatch = useDispatch();
  
  const confirmChangeDataHandler = () => {
    const data = {
      table : "hero",
      title : "title",
      value : titleHero,
      id_table : 'id_hero',
      id : id_hero
    }
    dispatch(updateDataManagement(data))
    setShowInputChangTitle(false)
  } 

  return (
    <>
      {showInputChangTitle ? (
        <>
          <input
            className=" bg-transparent border px-2 w-1/2"
            type="text"
            value={titleHero}
            onChange={(e) => setTitleHero(e.target.value)}
          />
          <ButtonConfirmChange confirmChangeDataHandler={confirmChangeDataHandler}/>
          <ButtonCancelChangeData  showInput={setShowInputChangTitle} />
        </>
      ) : (
        <>
          <span>{title}</span>
          <ButtonChangeData showInput={setShowInputChangTitle} />
        </>
      )}
    </>
  );
};

export default HeroTitle;
