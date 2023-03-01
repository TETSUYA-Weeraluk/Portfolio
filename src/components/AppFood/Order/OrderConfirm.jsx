import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cookingAnimation from "../../../assets/121841-order-paper-icon.gif";
import { cartAction } from "../store/cart-slice";
import ButtonCloseOrder from "./ButtonCloseOrder";

const OrderConfirm = () => {
  const dispatch = useDispatch();
  const orderVisible = useSelector((state) => state.cart.orderConfirm);

  const onClickClosePopupOrder = () => {
    dispatch(cartAction.onClickOrderConfirm(false));
  };
  return (
    <>
      {orderVisible && (
        <div
          onClick={onClickClosePopupOrder}
          className="bg-black/70 h-screen z-10 w-full fixed top-0 left-0"
        ></div>
      )}
      <div
        className={
          orderVisible
            ? "text-center p-4 shadow-md z-20 fixed  top-20 right-0  left-0 duration-500 flex items-center justify-center"
            : "text-center p-4 shadow-md z-20 fixed  top-20 left-[100%]  duration-500 flex items-center justify-center"
        }
      >
        <div className=" relative bg-white p-4 rounded-lg">
          <ButtonCloseOrder />
          <div className="flex justify-center my-4">
            <img src={cookingAnimation} alt="" className="w-[100px]" />
          </div>
          <h1 className="font-bold text-3xl my-4">Confirm Order</h1>
        </div>
      </div>
    </>
  );
};

export default OrderConfirm;
