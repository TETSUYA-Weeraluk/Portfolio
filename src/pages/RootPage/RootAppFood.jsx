import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "../../components/AppFood/store/index";

const RootAppFood = () => {
  return (
    <Provider store={store}>
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};

export default RootAppFood;
