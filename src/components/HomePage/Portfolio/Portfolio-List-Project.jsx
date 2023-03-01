import React from "react";
import PortfolioProject from "./Portfolio-Project";
import projectAppFood from "../../../assets/Homepage-Portfolio/projectAppFood.png";
import projectCountry from "../../../assets/Homepage-Portfolio/projectCountry2.png";
const PortfolioListProject = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "AppFood",
      descriptions: "Web application for order food.",
      tool: "ReactJs , Tailwind , Redux",
      image: projectAppFood,
      linkTo: "project/appfood",
      sourceCodeTo: "www.github.com/TETSUYA-Weeraluk/App-Food",
    },
    {
      id: 2,
      title: "REST Countries API",
      descriptions:
        "Web application for country details and pull data from the REST Countries API.",
      tool: "ReactJs , Tailwind , Redux ",
      image: projectCountry,
      linkTo: "project/country",
      sourceCodeTo: "www.github.com/TETSUYA-Weeraluk/RESTful-Country",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
      {DUMMY_DATA.map((project) => (
        <PortfolioProject key={project.id} dataProject={project} />
      ))}
    </div>
  );
};

export default PortfolioListProject;
