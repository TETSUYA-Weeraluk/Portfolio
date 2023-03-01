import React from 'react'
import skill from "../../../assets/skill.gif";
import csslogo from "../../../assets/Skill-AboutMe/CSS.png";
import firebaselogo from "../../../assets/Skill-AboutMe/firebase.png";
import htmllogo from "../../../assets/Skill-AboutMe/html.png";
import javascriptlogo from "../../../assets/Skill-AboutMe/javascript.png";
import mysql from "../../../assets/Skill-AboutMe/mysql.png";
import nodejslogo from "../../../assets/Skill-AboutMe/nodejs-logo.png";
import reactlogo from "../../../assets/Skill-AboutMe/Reac-logo.png";
import swiftlogo from "../../../assets/Skill-AboutMe/swift-logo.png";

const AboutMeSkill = () => {
  return (
    <div>
          <h1 className="text-4xl text-center p-4">Skill</h1>
          <div className="grid md:grid-cols-3 items-center">
            <div className="flex justify-center">
              <img className="w-[300px]" src={skill} alt="" />
            </div>
            <div className="md:col-span-2 grid grid-cols-4 p-4 gap-10">
              <img
                className="hover:scale-150 duration-300 w-[50px]"
                src={htmllogo}
                alt=""
              />
              <img
                className="hover:scale-150 duration-300 w-[50px]"
                src={csslogo}
                alt=""
              />
              <img
                className="hover:scale-150 duration-300 w-[50px]"
                src={javascriptlogo}
                alt=""
              />
              <img
                className="hover:scale-150 duration-300 w-[50px]"
                src={reactlogo}
                alt=""
              />
              <img
                className="hover:scale-150 duration-300 w-[50px]"
                src={swiftlogo}
                alt=""
              />
              <img
                className="hover:scale-150 duration-300 w-[50px]"
                src={mysql}
                alt=""
              />
              <img
                className="hover:scale-150 duration-300 w-[50px]"
                src={firebaselogo}
                alt=""
              />
              <img
                className="hover:scale-150 duration-300 w-[50px]"
                src={nodejslogo}
                alt=""
              />
            </div>
          </div>
        </div>
  )
}

export default AboutMeSkill