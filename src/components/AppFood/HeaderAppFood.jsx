import React from "react";
import HeaderLeft from "./Header/HeaderLeft";
import HeaderMiddle from "./Header/HeaderMiddle";
import HeaderRight from "./Header/HeaderRight";

const HeaderAppFood = () => {

  return (
    <>
      <div className="flex fixed z-10 shadow-md bg-white w-full items-center justify-between p-4">
        <HeaderLeft />
        <HeaderMiddle />
        <HeaderRight />
      </div>
    </>
  );
};

export default HeaderAppFood;
