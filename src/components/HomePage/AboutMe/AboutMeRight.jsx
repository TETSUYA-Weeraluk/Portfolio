import React from "react";
import myPhoto from "../../../assets/myPhoto1.jpg";
const AboutMeRight = () => {
  return (
    <div className="flex justify-center">
      <img className="h-[400px] rounded-lg p-2 bg-white" src={myPhoto} alt="" />
    </div>
  );
};

export default AboutMeRight;
