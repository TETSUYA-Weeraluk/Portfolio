import React from "react";
import { Link } from "react-router-dom";

const ProjectDetail = (props) => {
  return (
    <div className="bg-[#113A5D] rounded-xl hover:scale-105 duration-300">
      <header>
        <img
          className="w-full rounded-t-xl "
          src={props.dataProject.image}
          alt=""
        />
      </header>

      <main className="p-4">
        <div className="flex gap-2 justify-end">
          <Link
            className="py-2 px-4 bg-[#062743] rounded-md hover:bg-white hover:text-[#062743]"
            to={props.dataProject.linkTo}
          >
            Demo
          </Link>
          <a
            className="py-2 px-4 bg-[#062743] ] rounded-md hover:bg-white hover:text-[#062743]"
            href={`https://${props.dataProject.sourceCodeTo}`}
          >
            Source Code
          </a>
        </div>
        <h1 className="text-xl md:text-2xl font-bold my-2">
          Project :{" "}
          <span className="text-[#C4FFDD]">{props.dataProject.title}</span>
        </h1>
        <h2>
          Descriptions :{" "}
          <span className="text-sm text-[#C4FFDD]">
            {props.dataProject.descriptions}
          </span>
        </h2>
        <h3>
          Tool :{" "}
          <span className="text-sm text-[#C4FFDD]">
            {props.dataProject.tool}
          </span>
        </h3>
      </main>
    </div>
  );
};

export default ProjectDetail;

