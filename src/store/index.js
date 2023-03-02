import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Appfood/cartSlice";
import listMenuSlice from "./Appfood/listMenuSlice";
import menuSlice from "./Appfood/menuSlice";
import countrySlice from "./Country/CountrySlice";

const store = configureStore({
  reducer: 
    {
      nav: menuSlice.reducer,
      cart: cartSlice.reducer,
      listMenu: listMenuSlice.reducer,
      country: countrySlice.reducer,
    },
});

export default store;
