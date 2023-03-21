import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioListitem = (props) => {
  const {
    project_img,
    title,
    descriptions,
    tool,
    link_demo,
    link_sourceCode,
    id_project,
  } = props.data;
  return (
    <li className="bg-[#113A5D] rounded-xl">
      <PortfolioItem
        data={project_img}
        id={id_project}
        column="project_img"
        title="img"
      />
      <div className="p-4">
        <PortfolioItem
          data={title}
          id={id_project}
          column="title"
          title="title"
        />
        <PortfolioItem
          data={descriptions}
          id={id_project}
          column="descriptions"
          title="Descriptions"
        />
        <PortfolioItem data={tool} id={id_project} column="tool" title="Tool" />

        <div className="mt-4">
          <PortfolioItem
            data={link_demo}
            id={id_project}
            column="link_demo"
            title="Link DEMO"
          />
          <PortfolioItem
            data={link_sourceCode}
            id={id_project}
            column="link_sourceCode"
            title="Link SourceCode"
          />
        </div>
      </div>
    </li>
  );
};

export default PortfolioListitem;
