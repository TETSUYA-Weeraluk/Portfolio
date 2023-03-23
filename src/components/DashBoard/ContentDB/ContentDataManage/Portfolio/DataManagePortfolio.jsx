import React, { useState } from "react";
import { useSelector } from "react-redux";
import ButtonAddData from "../ButtonAddData";
import OverlayPortfolio from "./OverlayPortfolio";
import PortfolioListitem from "./PortfolioListitem";

const DataManagePortfolio = () => {
  const dataProject = useSelector((state) => state.dataManage.data.project);
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="border-b border-white p-4">
      {showOverlay && <OverlayPortfolio showOverlay={setShowOverlay} />}
      <h2 className=" text-2xl font-bold text-white">Portfolio</h2>
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-4">
        {dataProject !== undefined && (
          <>
            {dataProject.map((data) => (
              <PortfolioListitem key={data.id_project} data={data} />
            ))}
          </>
        )}

        <div className="text-center mt-4">
          <ButtonAddData showOverlay={setShowOverlay} />
        </div>
      </ul>
    </div>
  );
};

export default DataManagePortfolio;
