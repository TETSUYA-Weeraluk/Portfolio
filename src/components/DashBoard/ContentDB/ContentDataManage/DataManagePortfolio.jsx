import React from "react";

const DataManagePortfolio = () => {
  return (
    <div className="border-b border-white p-4">
      <h2 className=" text-2xl font-bold text-white">Portfolio</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
        <li className="bg-[#113A5D] rounded-xl">
          <img
            className="w-full rounded-t-xl"
            src="https://sv1.img.in.th/U1Qj9r.png"
            alt="U1Qj9r.png"
            border="0"
          />
          <main className="p-4">
            <h1 className="text-xl md:text-2xl font-bold my-2">
              Project : <span className="text-[#C4FFDD]">AppFood</span>
            </h1>
            <h2>
              Descriptions :{" "}
              <span className="text-sm text-[#C4FFDD]">
                Web application for order food.
              </span>
            </h2>
            <h3>
              Tool :{" "}
              <span className="text-sm text-[#C4FFDD]">
                ReactJs , Tailwind , Redux
              </span>
            </h3>
            <div className="mt-4">
              <p>
                Link DEMO :{" "}
                <span className="text-[#C4FFDD]">
                  http://localhost:3000/project/appfood
                </span>
              </p>
              <p>
                Link SourceCode :{" "}
                <span className="text-[#C4FFDD]">
                  https://github.com/TETSUYA-Weeraluk/App-Food
                </span>
              </p>
            </div>
          </main>
        </li>
        <li className="bg-[#113A5D] rounded-xl">
          <img
            className="w-full rounded-t-xl"
            src="https://sv1.img.in.th/U1Qfwg.png"
            alt="U1Qj9r.png"
            border="0"
          />
          <main className="p-4">
            <h1 className="text-xl md:text-2xl font-bold my-2">
              Project : <span className="text-[#C4FFDD]">AppFood</span>
            </h1>
            <h2>
              Descriptions :{" "}
              <span className="text-sm text-[#C4FFDD]">
                Web application for order food.
              </span>
            </h2>
            <h3>
              Tool :{" "}
              <span className="text-sm text-[#C4FFDD]">
                ReactJs , Tailwind , Redux
              </span>
            </h3>
            <div className="mt-4">
              <p>
                Link DEMO :{" "}
                <span className="text-[#C4FFDD]">
                  http://localhost:3000/project/appfood
                </span>
              </p>
              <p>
                Link SourceCode :{" "}
                <span className="text-[#C4FFDD]">
                  https://github.com/TETSUYA-Weeraluk/App-Food
                </span>
              </p>
            </div>
          </main>
        </li>
      </ul>
    </div>
  );
};

export default DataManagePortfolio;
