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
import LoginPage from "./pages/Login_Register/LoginPage";
import RegisterPage from "./pages/Login_Register/RegisterPage";
import RootDashBaord from "./pages/RootPage/RootDashBaord";
import DashboardEditUser from "./pages/DashboardAdmin/DashboardEditUser";
import DashBoardHomePage from "./pages/DashboardAdmin/DashboardHomePage";
import DashboardDataManagement from "./pages/DashboardAdmin/DashboardDataManagement";

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

        { path : 'tetsuya-login' , element : <LoginPage />},
        { path : 'tetsuya-register' , element : <RegisterPage />},
        { path : 'dashboard-admin' , element : <RootDashBaord /> , children : [
          { index : true , element : <DashBoardHomePage />},
          { path : 'datamanament' , element : <DashboardDataManagement />},
          { path : 'edit/:username', element : <DashboardEditUser />}
          
        ]}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
