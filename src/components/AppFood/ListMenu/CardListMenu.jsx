import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";

const CardListMenu = (props) => {
  const dispatch = useDispatch();
  const {id , price , name , image} = props.data

  const addItemToCart = () => {
    dispatch(cartAction.addItemToCart({
      id,
      name,
      price,
      image
    }))
  }
  return (
    <div key={props.data.id}>
      <img
        className="w-full h-[250px] object-cover rounded-t-xl"
        src={props.data.image}
        alt=""
      />
      <div className="border rounded-b-xl p-4">
        <div className="flex justify-between">
          <h1 className="font-bold">{props.data.name}</h1>
          <p>{props.data.price + "$"}</p>
        </div>
        <div className="text-right mt-4">
          <button onClick={addItemToCart} className="px-4 py-2 bg-orange-600 rounded-lg text-white">
            Add +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardListMenu;
