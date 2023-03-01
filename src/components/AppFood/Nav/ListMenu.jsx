import React from "react";
import { IoMdCart, IoMdWallet , IoIosHeart } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { HiTicket } from "react-icons/hi";
const ListMenu = () => {

  const cssButton = 'flex gap-5 items-center my-4 hover:text-orange-600'

  return (
    <div>
      <button className={cssButton}>
        <IoMdCart />
        <span>Order</span>
      </button>
      <hr></hr>
      <button className={cssButton}>
        <IoIosHeart />
        <span>Favorites</span>
      </button>
      <hr></hr>
      <button className={cssButton}>
        <IoMdWallet />
        <span>Wallet</span>
      </button>
      <hr></hr>
      <button className={cssButton}>
        <HiTicket />
        <span>Promotion</span>
      </button>
      <hr></hr>
      <button className={cssButton}>
        <BiHelpCircle />
        <span>Help</span>
      </button>
      <hr></hr>
    </div>
  );
};

export default ListMenu;
