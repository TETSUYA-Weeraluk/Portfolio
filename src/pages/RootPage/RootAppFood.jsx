import React from "react";
import { Outlet } from "react-router-dom";

const RootAppFood = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootAppFood;
