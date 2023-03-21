import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
const ButtonChangeData = (props) => {
  const showInput = props.showInput;
  return (
    <button onClick={() => showInput(true)} className=" hover:bg-white/40">
      <AiOutlineEdit />
    </button>
  );
};

export default ButtonChangeData;
