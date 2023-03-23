import React from "react";

const OverlayAddData = (props) => {
  return (
    <>
      <div className="bg-black/70 fixed top-0 left-0 right-0 bottom-0 z-10"></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center z-20">
        <div className="flex items-center p-4">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default OverlayAddData;
