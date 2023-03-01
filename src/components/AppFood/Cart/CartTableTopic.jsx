import React from "react";
import { useSelector } from "react-redux";

const CartTableTopic = () => {
  const cartItemData = useSelector((state) => state.cart.items);

  let cssTableHeight = "";
  if (cartItemData.length === 0) {
    cssTableHeight = "hidden";
  } else {
    cssTableHeight = "";
  }
  return (
    <div className={cssTableHeight}>
      <div className="grid grid-cols-5 gap-4 p-4">
        <div className="font-bold col-span-2 text-left">Item</div>
        <div className="font-bold">Price</div>
        <div className="font-bold">Quantity</div>
        <div className="font-bold text-right">Total</div>
      </div>
    </div>
  );
};

export default CartTableTopic;
