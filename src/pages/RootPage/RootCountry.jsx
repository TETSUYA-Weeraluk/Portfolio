import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
const RootCountry = () => {
  useEffect(() => {
    localStorage.getItem("theme") === null
      ? localStorage.setItem("theme", true)
      : localStorage.getItem("theme");
  }, []);
  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default RootCountry;
