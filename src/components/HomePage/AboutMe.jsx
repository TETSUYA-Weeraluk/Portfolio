import React from "react";
import AboutMeLeft from "./AboutMe/AboutMeLeft";
import AboutMeRight from "./AboutMe/AboutMeRight";
import AboutMeSkill from "./AboutMe/AboutMe-Skill";
import { TopicHomepage } from "./TopicHomePage";

const AboutMe = () => {
  return (
    <div className="p-4" id="AboutMe">
      <div className="max-w-7xl shadow-xl mx-auto">
        <TopicHomepage title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b">
          <AboutMeRight />
          <AboutMeLeft />
        </div>
        <AboutMeSkill />
      </div>
    </div>
  );
};

export default AboutMe;
