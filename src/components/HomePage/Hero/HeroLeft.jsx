import React from "react";
import myPhoto from "../../../assets/myPhoto2.jpg";

const HeroLeft = () => {
  return (
    <div className="flex justify-center">
      <img src={myPhoto} className="h-[400px] rounded-lg bg-white p-2" alt="" />
    </div>
  );
};

export default HeroLeft;
