import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const ButtonConfirmChange = (props) => {
    const confirmChangeDataHandler = props.confirmChangeDataHandler
  return (
    <button onClick={confirmChangeDataHandler} className="mx-2 h-6 bg-white/20 px-2 rounded-md hover:bg-white/40">
      <AiOutlineCheck />
    </button>
  );
};

export default ButtonConfirmChange;
