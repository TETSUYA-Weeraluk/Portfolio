import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDataManagement } from "../../../../../store/Dashboard/DataManagement";
import ButtonCancelChangeData from "../ButtonCancelChangeData";
import ButtonChangeData from "../ButtonChangeData";
import ButtonConfirmChange from "../ButtonConfirmChange";

const PortfolioItem = (props) => {
  const data = props.data;
  const title = props.title;
  const column = props.column;
  const id = props.id;
  const [valueInput, setValueInput] = useState(data);
  const [showInputChange, setShowInputChange] = useState(false);
  const dispatch = useDispatch();

  const confirmChangeDataHandler = () => {
    const data = {
      table: "project",
      title: column,
      value: valueInput,
      id_table: "id_project",
      id: id,
    };
    dispatch(updateDataManagement(data));
    setShowInputChange(false);
  };

  let content = <></>;

  if (props.title === "img") {
    content = (
      <>
        {showInputChange ? (
          <>
            <img
              className="w-full rounded-t-xl"
              src={valueInput}
              alt="U1Qj9r.png"
              border="0"
            />

            <div className="flex items-center mt-2 px-4">
              <input
                className=" bg-transparent border px-2 w-1/2"
                type="text"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
              <ButtonConfirmChange
                confirmChangeDataHandler={confirmChangeDataHandler}
              />
              <ButtonCancelChangeData showInput={setShowInputChange} />
            </div>
          </>
        ) : (
          <>
            <img
              className="w-full rounded-t-xl mb-2"
              src={valueInput}
              alt="U1Qj9r.png"
              border="0"
            />
            <div className="px-4 flex items-center gap-2">
              <p>{valueInput}</p>
              <ButtonChangeData showInput={setShowInputChange} />
            </div>
          </>
        )}
      </>
    );
  } else if (title === "title") {
    content = (
      <>
        {showInputChange ? (
          <>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl font-bold my-2">Project :</p>
              <input
                className=" bg-transparent border px-2 w-1/2"
                type="text"
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
              />
              <ButtonConfirmChange
                confirmChangeDataHandler={confirmChangeDataHandler}
              />
              <ButtonCancelChangeData showInput={setShowInputChange} />
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <p className="text-xl md:text-2xl font-bold my-2">Project :</p>
              <span className="text-[#C4FFDD] text-xl md:text-2xl font-bold">
                {data}
              </span>
              <ButtonChangeData showInput={setShowInputChange} />
            </div>
          </>
        )}
      </>
    );
  } else {
    content = (
      <>
        {showInputChange ? (
          <>
              <div className="flex items-center gap-2">
                <p>{title} :</p>
                <input
                  className=" bg-transparent border px-2 w-1/2"
                  type="text"
                  value={valueInput}
                  onChange={(e) => setValueInput(e.target.value)}
                />
                <ButtonConfirmChange
                  confirmChangeDataHandler={confirmChangeDataHandler}
                />
                <ButtonCancelChangeData showInput={setShowInputChange} />
              </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <p>
                {title} : <span className="text-sm text-[#C4FFDD]">{data}</span>
              </p>
              <ButtonChangeData showInput={setShowInputChange} />
            </div>
          </>
        )}
      </>
    );
  }
  return <>{content}</>;
};

export default PortfolioItem;
