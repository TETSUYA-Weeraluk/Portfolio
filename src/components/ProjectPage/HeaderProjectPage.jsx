import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const HeaderProjectPage = () => {
  const history = useNavigate()
  return (
    <div className="bg-[#113A5D] grow-0 shrink-0 basis-auto">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex items-center">
          <button onClick={()=>history(-1)} className="bg-[#062743] absolute px-4 py-1 rounded-lg hover:bg-white hover:text-[#062743]">
            <BsArrowLeft className="" size={20} />
          </button>
          <div className=" grow text-center">
            <span className="font-bold text-3xl justify-center border-b border-[#C4FFDD]">
              MY PROJECT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProjectPage;
