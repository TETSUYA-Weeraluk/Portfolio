import React from "react";
import projectAppFood from "../../../assets/Homepage-Portfolio/projectAppFood.png";
import projectCountry from "../../../assets/Homepage-Portfolio/projectCountry2.png";
import ProjectDetail from "./ProjectDetail";
const ProjectList = () => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: "AppFood",
      descriptions: "Web application for order food.",
      tool: "ReactJs , Tailwind , Redux",
      image: projectAppFood,
      linkTo: "appfood",
      sourceCodeTo: "www.github.com/TETSUYA-Weeraluk/App-Food",
    },
    {
      id: 2,
      title: "REST Countries API",
      descriptions:
        "Web application for country details and pull data from the REST Countries API.",
      tool: "ReactJs , Tailwind , Redux ",
      image: projectCountry,
      linkTo: "country",
      sourceCodeTo: "www.github.com/TETSUYA-Weeraluk/RESTful-Country",
    },
    {
        id: 3,
        title: "AppFood",
        descriptions: "Web application for order food.",
        tool: "ReactJs , Tailwind , Redux",
        image: projectAppFood,
        linkTo: "appfood",
        sourceCodeTo: "www.github.com/TETSUYA-Weeraluk/App-Food",
      },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
      {DUMMY_DATA.map((project) => (
        <ProjectDetail key={project.id} dataProject={project} />
      ))}
    </div>
  );
};

export default ProjectList;
