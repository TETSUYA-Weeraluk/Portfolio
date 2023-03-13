import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import store from "../../store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};

export default RootLayout;
