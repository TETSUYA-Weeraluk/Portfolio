import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";

const CartTotal = () => {
  const cartItemData = useSelector((state) => state.cart.items);
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity)
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
  const dispatch = useDispatch()
  
  const onClickConfirmOrder = () => {
    dispatch(cartAction.onClickOrderConfirm(true))
    dispatch(cartAction.cartToggle())
  }

  let cssTableHeight = ''
  if(cartItemData.length === 0){
    cssTableHeight = 'hidden'
  }else{
    cssTableHeight = 'flex justify-end'
  }
  return (
    <div className={cssTableHeight}>
      <div className="w-[200px]">
        <div className="grid grid-cols-2 gap-2 my-4">
          <h1 className="font-bold text-start">Quantity : </h1>
          <span className="text-end">{cartTotalQuantity}</span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-4">
          <h1 className="font-bold text-start">Total : </h1>
          <span className="text-end">${cartTotalAmount.toFixed(2)}</span>
        </div>
        <button onClick={onClickConfirmOrder} className="py-2 w-full bg-orange-600 text-white ">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
