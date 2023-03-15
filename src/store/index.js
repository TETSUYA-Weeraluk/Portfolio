import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Appfood/cartSlice";
import listMenuSlice from "./Appfood/listMenuSlice";
import menuSlice from "./Appfood/menuSlice";
import countrySlice from "./Country/CountrySlice";
import dataManagementSlice from "./Dashboard/DataManagement";
import userSlice from "./user/user";
import userEditSlice from "./user/userEditSlice";

const store = configureStore({
  reducer: 
    {
      nav: menuSlice.reducer,
      cart: cartSlice.reducer,
      listMenu: listMenuSlice.reducer,
      country: countrySlice.reducer,
      user : userSlice.reducer,
      userEdit : userEditSlice.reducer,
      dataManage : dataManagementSlice.reducer,
    },
});

export default store;
