import React from "react";
import HeroLeft from "./Hero/HeroLeft";
import HeroRight from "./Hero/HeroRight";
const HeroHomePage = () => {
  return (
    <div className="w-full bg-[#062743]">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-5 shadow-xl p-4 bg-[#062743]"
        id="HeroHomePage"
      >
        <HeroLeft />
        <HeroRight />
      </div>
    </div>
  );
};

export default HeroHomePage;
