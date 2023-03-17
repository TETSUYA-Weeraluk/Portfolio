import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ButtonCancelChangeData = (props) => {
  const showInput = props.showInput;
  return (
    <button
      onClick={() => showInput(false)}
      className="h-6 bg-white/20 px-2 rounded-md hover:bg-white/40"
    >
      <AiOutlineClose />
    </button>
  );
};

export default ButtonCancelChangeData;
