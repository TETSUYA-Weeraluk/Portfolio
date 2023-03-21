import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonCancelChangeData from "../ButtonCancelChangeData";
import ButtonChangeData from "../ButtonChangeData";
import ButtonConfirmChange from "../ButtonConfirmChange";
import { updateDataManagement } from "../../../../../store/Dashboard/DataManagement";

const PersonalContactItem = (props) => {
  const data = props.data;
  const id = props.data.id_contact;
  const [valueInput, setValueInput] = useState(data.title);
  const [valueLinkInput, setValueLinkInput] = useState(data.link_contact);
  const [showInputChange, setShowInputChange] = useState(false);
  const [showInputChangeLink, setShowInputChangeLink] = useState(false);
  const dispatch = useDispatch();

  const confirmChangeDataHandler = () => {
    const data = {
      table: "contact",
      title: "title",
      value: valueInput,
      id_table: "id_contact",
      id: id,
    };
    dispatch(updateDataManagement(data));
    setShowInputChange(false);
  };

  const confirmChangeLinkDataHandler = () => {
    const data = {
      table: "contact",
      title: "link_contact",
      value: valueLinkInput,
      id_table: "id_contact",
      id: id,
    };
    dispatch(updateDataManagement(data));
    setShowInputChangeLink(false);
  };

  let listItem = <></>;

  if (data.descriptions === "email") {
    listItem = (
      <li className="flex items-center gap-2">
        {showInputChange ? (
          <div className="w-1/2 flex items-center">
            <img className="w-[20px]" src={data.icons} alt="" />
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
            <a
              href={`mailto:${data.title}`}
              className="flex items-center gap-2"
            >
              <img className="w-[20px]" src={data.icons} alt="" />
              <span>{data.title}</span>
            </a>
            <ButtonChangeData showInput={setShowInputChange} />
          </>
        )}
      </li>
    );
  } else if (data.descriptions === "phone") {
    listItem = (
      <li className="flex items-center gap-2">
        {showInputChange ? (
          <div className="w-1/2 flex items-center">
            <img className="w-[20px]" src={data.icons} alt="" />
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
            <a href={`tel:${data.title}`} className="flex items-center gap-2">
              <img className="w-[20px]" src={data.icons} alt="" />
              <span>{data.title}</span>
            </a>
            <ButtonChangeData showInput={setShowInputChange} />
          </>
        )}
      </li>
    );
  } else {
    listItem = (
      <li className="flex flex-col gap-2">
        {showInputChange ? (
          <div className="w-1/2 flex items-center">
            <img className="w-[20px]" src={data.icons} alt="" />
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
            <div className="flex items-center gap-2">
              <a
                href={`${data.link_contact}`}
                className="flex items-center gap-2"
              >
                <img className="w-[20px]" src={data.icons} alt="" />
                <span>{data.title}</span>
              </a>
              <ButtonChangeData showInput={setShowInputChange} />
            </div>
          </>
        )}

        {showInputChangeLink ? (
          <div className="flex items-center">
            <p>Link :</p>
            <input
              className=" bg-transparent border px-2"
              type="text"
              value={valueLinkInput}
              onChange={(e) => setValueLinkInput(e.target.value)}
            />
            <ButtonConfirmChange
              confirmChangeDataHandler={confirmChangeLinkDataHandler}
            />
            <ButtonCancelChangeData showInput={setShowInputChangeLink} />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <a
              href={`${data.link_contact}`}
              className="flex items-center gap-2"
            >
              <p>Link :</p>
              <span>{data.link_contact}</span>
            </a>
            <ButtonChangeData showInput={setShowInputChangeLink} />
          </div>
        )}
      </li>
    );
  }

  return <div>{listItem}</div>;
};

export default PersonalContactItem;
