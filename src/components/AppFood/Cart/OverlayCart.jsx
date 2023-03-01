import React from "react";
import { useSelector } from "react-redux";
import ButtonCloseCart from "./ButtonCloseCart";
import CartTotal from "./CartTotal";
import Table from "./Table";

const OverlayCart = () => {
  const cartIsVisible = useSelector((state) => state.cart.cartIsOpen);
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <div
        className={
          cartIsVisible
            ? "bg-black/70 h-screen z-10 w-full fixed top-0 left-0"
            : ""
        }
      ></div>
      <div className={ cartIsVisible ? "shadow-md z-20 flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 duration-500 p-4" : "shadow-md z-20 flex justify-center items-center fixed top-[-100%] left-0 right-0 duration-500"}>
        {/* <div className={ cartIsVisible ? "text-center p-4 shadow-md z-20 fixed bg-white top-0 right-0 sm:top-10 sm:right-10 duration-500" : 'text-center p-4 shadow-md z-20 fixed bg-white top-[-200%] right-0 sm:top-[-100%] sm:right-10 duration-500' }> */}
        <div className=" relative items-center bg-white rounded-lg p-4">
          <ButtonCloseCart />
          <h1 className="text-3xl font-bold p4 my-4">
            Your Cart ({cartTotalQuantity} items)
          </h1>
          <Table />
          <CartTotal />
        </div>
      </div>
    </>
  );
};

export default OverlayCart;
