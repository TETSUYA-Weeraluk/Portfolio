import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeroRight = () => {
  const dataHero = useSelector((state) => state.homePageData.data.hero);
  let title;
  let Sub_title;
  let descriptions;
  if (dataHero) {
    title = dataHero.filter((data) => data.title === "title");
    Sub_title = dataHero.filter((data) => data.title === "sub_title");
    descriptions = dataHero.filter(
      (data) =>
        data.title !== "image_hero" &&
        data.title !== "title" &&
        data.title !== "sub_title"
    );
  }
  return (
    <div>
      {title && Sub_title && (
        <>
          <p className="font-bold text-lg">{title[0].descriptions}</p>
          <p className="font-bold text-xl text-[#C4FFDD]">
            {Sub_title[0].descriptions}
          </p>
          <br />
          {descriptions &&
            descriptions.map((data, index) => (
              <div key={index}>
                <p>{data.descriptions}</p>
                <br></br>
              </div>
            ))}
          <div className="mt-4">
            <Link
              to="project"
              smooth="true"
              className="px-4 py-2 font-bold rounded-md bg-[#113A5D] hover:bg-white hover:text-[#062743]"
            >
              My project
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroRight;
