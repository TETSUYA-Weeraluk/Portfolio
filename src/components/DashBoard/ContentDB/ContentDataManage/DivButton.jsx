import React from "react";

const DivButton = (props) => {
    const showOverlay = props.showOverlay
  return (
    <>
      {/* กล่องใส่ ปุ่ม Add , Cancel */}
      <div className="mt-4 flex justify-center gap-4">
        {/* ปุ่ม Add */}
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-full"
        >
          Add
        </button>
        {/* ปุ่ม Cancel */}
        <button
          onClick={() => showOverlay(false)}
          className="px-4 py-2 bg-red-600 text-white rounded-full"
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default DivButton;
