import React from "react";

const PortfolioItem = (props) => {
  const { project_img, title, descriptions, tool, link_demo, link_sourceCode } =
    props.data;
  return (
    <li className="bg-[#113A5D] rounded-xl">
      <img
        className="w-full rounded-t-xl"
        src={project_img}
        alt="U1Qj9r.png"
        border="0"
      />
      <div className="p-4">
        <h1 className="text-xl md:text-2xl font-bold my-2">
          Project : <span className="text-[#C4FFDD]">{title}</span>
        </h1>
        <h2>
          Descriptions :{" "}
          <span className="text-sm text-[#C4FFDD]">{descriptions}</span>
        </h2>
        <h3>
          Tool : <span className="text-sm text-[#C4FFDD]">{tool}</span>
        </h3>
        <div className="mt-4">
          <p>
            Link DEMO : <span className="text-[#C4FFDD]">{link_demo}</span>
          </p>
          <p>
            Link SourceCode :{" "}
            <span className="text-[#C4FFDD]">{link_sourceCode}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
