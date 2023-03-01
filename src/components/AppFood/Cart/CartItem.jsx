import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";

const CartItem = (props) => {
  const { image, name, price, quantity, totalPrice, id } = props.item;
  const dispatch = useDispatch();

  const addItemFormCart = () => {
    dispatch(
      cartAction.addItemToCart({
        name,
        price,
        id,
      })
    );
  };
  const removeItemFormCart = () => {
    dispatch(
      cartAction.removeItemFormCart({
        id,
      })
    );
  };
  return (
    <li className="">
      <div className="grid grid-cols-5 py-2 sm:py-4">
        <div className="font-bold col-span-2 justify-start flex items-center gap-1 sm:gap-5">
          <img
            src={image}
            alt=""
            className="h-[50px] w-[50px] sm:h-[70px]  sm:w-[70px] lg:w-[100px] lg:h-[100px] object-cover"
          />
          <span className=''>{name}</span>
        </div>
        <div className="flex items-center justify-center">
          <p>{price}</p>
        </div>
        <div className="flex items-center justify-center">
          <div className=" flex items-center border-black border rounded-lg">
            <button
              onClick={removeItemFormCart}
              className="border-r-md rounded-l-md px-2 md:py-1 md:px-3  bg-orange-600 text-white"
            >
              <span>-</span>
            </button>

            <span className="px-2 md:py-1 md:px-3 text-orange-600 border-l border-r border-black">
              {quantity}
            </span>

            <button
              onClick={addItemFormCart}
              className="border-l-md rounded-r-md px-2 md:py-1 md:px-3  bg-orange-600 text-white"
            >
              <span>+</span>
            </button>
          </div>
        </div>
        <div className="text-right font-bold flex items-center justify-end">
          <span>{totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <hr className=""></hr>
    </li>
  );
};

export default CartItem;
