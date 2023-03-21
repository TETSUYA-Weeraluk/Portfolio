import React from "react";
import { useSelector } from "react-redux";
import HeroTitle from "./HeroTitle";

const DataManageHero = () => {
  const dataHero = useSelector((state) => state.dataManage.data.hero);
  return (
    <div className="border-b border-white">
      <h2 className=" text-2xl font-bold text-white">Hero</h2>
      <div className="p-4 flex flex-col gap-4 ">
        {dataHero !== undefined && (
          <>
            {dataHero.map((data) => (
              <HeroTitle key={data.id_hero} data={data} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default DataManageHero;
