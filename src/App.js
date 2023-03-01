import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Country from "./pages/myProject/Country/Country";
import HomePage from "./pages/HomePage";
import Project from "./pages/Project";
import RootProject from "./pages/RootPage/RootProject";
import RootLayout from "./pages/RootPage/RootLayout";
import RootCountry from "./pages/RootPage/RootCountry";
import CountryDetail from "./pages/myProject/Country/CountryDetail";
import RootAppFood from "./pages/RootPage/RootAppFood";
import AppFoodPage from "./pages/myProject/AppFood/AppFoodPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },

        {
          path: "project",
          element: <RootProject />,
          children: [
            { index: true, element: <Project /> },
            {
              path: "country",
              element: <RootCountry />,
              children: [
                { index: true, element: <Country /> },
                {
                  path: ":capital",
                  element: <CountryDetail />,
                },
              ],
            },
            {
              path : 'appfood' ,
              element : <RootAppFood />,
              children : [
                { index : true , element : <AppFoodPage />}
              ]
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
