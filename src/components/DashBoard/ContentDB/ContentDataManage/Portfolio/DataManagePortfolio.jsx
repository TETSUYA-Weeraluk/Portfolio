import React from "react";
import { useSelector } from "react-redux";
import PortfolioListitem from "./PortfolioListitem";

const DataManagePortfolio = () => {
  const dataProject = useSelector((state) => state.dataManage.data.project);
  return (
    <div className="border-b border-white p-4">
      <h2 className=" text-2xl font-bold text-white">Portfolio</h2>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-4">
        {dataProject !== undefined && (
          <>
            {dataProject.map((data) => (
              <PortfolioListitem key={data.id_project} data={data} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default DataManagePortfolio;
