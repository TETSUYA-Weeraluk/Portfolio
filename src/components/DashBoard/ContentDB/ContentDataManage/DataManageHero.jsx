import React, {  useState } from "react";
import {  useSelector } from "react-redux";
import HeroDescriptions from "./Hero/HeroDescriptions";
import HeroSubTitle from "./Hero/HeroSubTitle";
import HeroTitle from "./Hero/HeroTitle";

const DataManageHero = () => {
  const dataHero = useSelector((state) => state.dataManage.data.hero);
  const [showInputChangTitle, setShowInputChangTitle] = useState(false);
  const [showInputChangSubTitle, setShowInputChangSubTitle] = useState(false);
  const [showInputChangDescriptions, setShowInputChangDescriptions] = useState(false);

  return (
    <div className="border-b border-white">
      <h2 className=" text-2xl font-bold text-white">Hero</h2>
      <div className="p-4 flex flex-col gap-4 ">
        {dataHero !== undefined && (
          <>
            <p>
              Title :{" "}
              <HeroTitle
                data={dataHero}
                showInputChangTitle={showInputChangTitle}
                setShowInputChangTitle={setShowInputChangTitle}
              />
            </p>

            <p>
              Sub Title :{" "}
              <HeroSubTitle
                data={dataHero}
                showInputChangSubTitle={showInputChangSubTitle}
                setShowInputChangSubTitle={setShowInputChangSubTitle}

              />
            </p>
            <p>
              Descriptions :{" "}
              <HeroDescriptions
                data={dataHero}
                showInputChangDescriptions={showInputChangDescriptions}
                setShowInputChangDescriptions={setShowInputChangDescriptions}
              />
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DataManageHero;
