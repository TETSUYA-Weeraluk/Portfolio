import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartTableTopic from "./CartTableTopic";

const Table = () => {
  const cartItemData = useSelector((state) => state.cart.items);

  let cssTableHeight = "";
  if (cartItemData.length === 0) {
    cssTableHeight = "";
  } else {
    cssTableHeight = "overflow-auto max-h-[200px] sm:max-h-[300px] md:max-h-[400px]";
  }
  return (
    <>
      <CartTableTopic />
      <ul className={`gap-4 ${cssTableHeight}`}>
        {cartItemData.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default Table;
