import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDataManagement } from "../../../../store/Dashboard/DataManagement";
import ButtonCancelChangeData from "./ButtonCancelChangeData";
import ButtonChangeData from "./ButtonChangeData";
import ButtonConfirmChange from "./ButtonConfirmChange";

const PersonalListItem = (props) => {
  const data = props.data;
  const title = props.data[1];
  const column_link = props.data[1].column_link;
  const id_personal = props.id;
  const [showInputChange, setShowInputChange] = useState(false);
  const [valueInput, setValueInput] = useState(data[1].value);
  const [valueLinkInput, setValueLink] = useState(data[1].link);
  const dispatch = useDispatch();

  const confirmChangeDataHandler = () => {
    const data = {
      table: "personal",
      title: title,
      value: valueInput,
      id_table: "id_personal",
      id: id_personal,
    };
    dispatch(updateDataManagement(data));
    setShowInputChange(false);
  };

  const confirmChangeLinkHandler = () => {
    const data = {
      table: "personal",
      title: column_link,
      value: valueLinkInput,
      id_table: "id_personal",
      id: id_personal,
    };
    console.log(data)
    dispatch(updateDataManagement(data));
    setShowInputChange(false);
  };

  let listItem = <></>;

  if (data[1].link && data[0] !== "phone" && data[0] !== "email") {
    listItem = (
      <>
        <li className="flex items-center gap-2">
          {showInputChange ? (
            <>
              <div className="flex flex-col gap-2 w-1/2">
                <div className="flex items-center gap-2">
                  <img className="w-[20px]" src={data[1].icons} alt="" />
                  <input
                    className=" bg-transparent border px-2 w-full"
                    type="text"
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                  />
                  <ButtonConfirmChange
                    confirmChangeDataHandler={confirmChangeDataHandler}
                  />
                </div>
                <div className="flex items-start gap-2">
                  <p className="">Link</p>
                  <input
                    className=" bg-transparent border px-2 w-full"
                    type="text"
                    value={valueLinkInput}
                    onChange={(e) => setValueLink(e.target.value)}
                  />
                  <ButtonConfirmChange
                    confirmChangeDataHandler={confirmChangeLinkHandler}
                  />
                </div>
              </div>
              <ButtonCancelChangeData showInput={setShowInputChange} />
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <img className="w-[20px]" src={data[1].icons} alt="" />
                  <a href={data[1].link}>{data[1].value}</a>
                </div>
                <div>
                  <p>
                    Link : <span>{data[1].link}</span>
                  </p>
                </div>
              </div>
              <ButtonChangeData showInput={setShowInputChange} />
            </>
          )}
        </li>
      </>
    );
  } else if (data[0] === "id") {
    listItem = <></>;
  } else {
    listItem = (
      <li className="flex items-center gap-2">
        <img className="w-[20px]" src={data[1].icons} alt="" />
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
            <span>{data[1].value}</span>
            <ButtonChangeData showInput={setShowInputChange} />
          </>
        )}
      </li>
    );
  }

  return <>{listItem}</>;
};

export default PersonalListItem;
