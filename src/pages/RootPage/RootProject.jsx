import React from "react";
import { Outlet } from "react-router-dom";

const RootProject = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootProject;
