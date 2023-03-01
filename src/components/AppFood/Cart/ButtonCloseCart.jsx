import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch  } from "react-redux";
import { cartAction } from "../store/cart-slice";
const ButtonCloseCart = () => {
  const dispatch = useDispatch();
  const cartIsClose = () => {
    dispatch(cartAction.cartToggle());
  };
  return (
    <div className="text-right my-4">
      <button onClick={cartIsClose} className="bg-zinc-200 rounded-full p-2">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default ButtonCloseCart;
