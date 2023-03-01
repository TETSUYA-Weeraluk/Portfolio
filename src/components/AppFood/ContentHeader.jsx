import React from "react";

const ContentHeader = () => {
  return (
    <div className="max-h-[500px] relative my-4">
      <div className="absolute w-full h-full rounded-xl text-white max-h-[500px] bg-black/40 flex flex-col justify-center">
        <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          App <span className="text-orange-500">Food</span>
        </h1>
      </div>
      <img
        className="w-full max-h-[500px] object-cover rounded-xl"
        src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="/"
      />
    </div>
  );
};

export default ContentHeader;
