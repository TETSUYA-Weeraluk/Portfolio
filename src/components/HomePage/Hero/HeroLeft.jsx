import React from "react";
import { useSelector } from "react-redux";
// import myPhoto from "../../../assets/myPhoto2.jpg";

const HeroLeft = () => {
  const dataHero = useSelector((state) => state.homePageData.data.hero);
  let myImageHero;
  if (dataHero) {
    myImageHero = dataHero.filter((data) => data.title === "image_hero")
    console.log(myImageHero)
  }
  return (
    <div className="flex justify-center">
      {myImageHero && <img src={myImageHero[0].descriptions} className="h-[400px] rounded-lg bg-white p-2" alt="" />}
    </div>
  );
};

export default HeroLeft;
