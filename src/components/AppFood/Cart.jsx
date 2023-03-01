import React from "react";  
import OverlayCart from "./Cart/OverlayCart";

const Cart = () => {
  return (
    <div className='fixed z-30'>
       <OverlayCart />
    </div>
  );
};

export default Cart;
