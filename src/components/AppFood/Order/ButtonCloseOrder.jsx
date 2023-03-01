import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";

const ButtonCloseOrder = () => {
    const dispatch = useDispatch()
    
    const onClickClosePopupOrder = () => {
        dispatch(cartAction.onClickOrderConfirm(false))
    }
  return (
    <div className="text-right">
      <button  onClick={onClickClosePopupOrder} className="bg-zinc-200 rounded-full p-2">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default ButtonCloseOrder;
