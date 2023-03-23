import React, { useState } from "react";
import { useSelector } from "react-redux";
import ButtonAddData from "../ButtonAddData";
import HeroTitle from "./HeroTitle";
import OverlayAddRowHero from "./OverlayAddRowHero";

const DataManageHero = () => {
  const dataHero = useSelector((state) => state.dataManage.data.hero);
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="border-b border-white">
      {showOverlay && <OverlayAddRowHero showOverlay={setShowOverlay} />}
      <h2 className=" text-2xl font-bold text-white">Hero</h2>
      <ul className="p-4 flex flex-col gap-4 ">
        {dataHero !== undefined && (
          <>
            {dataHero.map((data) => (
              <HeroTitle key={data.id_hero} data={data} />
            ))}
          </>
        )}
        <div>
          <ButtonAddData showOverlay={setShowOverlay} />
        </div>
      </ul>
    </div>
  );
};

export default DataManageHero;
