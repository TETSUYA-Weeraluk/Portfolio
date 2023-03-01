import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "../../components/Country/store";
const RootCountry = () => {
  useEffect(() => {
    localStorage.getItem("theme") === null
      ? localStorage.setItem("theme", true)
      : localStorage.getItem("theme");
  }, []);
  return (
    <Provider store={store}>
      <main>
        <Outlet></Outlet>
      </main>
    </Provider>
  );
};

export default RootCountry;
