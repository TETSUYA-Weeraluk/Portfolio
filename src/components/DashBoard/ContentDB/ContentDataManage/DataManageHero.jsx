import React from "react";
import { useSelector } from "react-redux";

const DataManageHero = () => {
  const dataHero = useSelector((state) => state.dataManage.data[0]);
  console.log(dataHero);
  return (
    <div className="border-b border-white">
      <h2 className=" text-2xl font-bold text-white">Hero</h2>
      <div className="p-4 flex flex-col gap-4 ">
        {dataHero !== undefined && (
          <>
            <p className="">
              Title : <span>{dataHero[0].title}</span>
            </p>
            <p>
              Sub Title : <span>{dataHero[0].sub_title}</span>
            </p>
            <p>
              Descriptions : <span>{dataHero[0].descriptions}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DataManageHero;
