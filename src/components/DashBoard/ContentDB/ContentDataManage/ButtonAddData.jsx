import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const ButtonAddData = (props) => {
    const showOverlay = props.showOverlay
  return (
    <button onClick={() => showOverlay(true) }>
      <AiOutlinePlusCircle size={25} />
    </button>
  );
};

export default ButtonAddData;
