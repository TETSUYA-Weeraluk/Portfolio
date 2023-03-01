import React from "react";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";

const HeaderRight = () => {
  const dispatch = useDispatch()
  const cartTotalQuantity = useSelector(state => state.cart.totalQuantity)
  const openCartHandler = () => {
    dispatch(cartAction.cartToggle())
  }

  
  return (
    <>
      <div className="flex">
        <button onClick={openCartHandler} className="bg-black text-white flex items-center px-4 py-1 rounded-xl">
          <IoMdCart />
          <span>Cart</span>
        </button>
        <div className=" relative bg-pink-700 rounded-full text-white w-[25px] h-[25px] flex items-center justify-center right-4 bottom-3">
          <span>{cartTotalQuantity}</span>
        </div>
      </div>
    </>
  );
};

export default HeaderRight;
