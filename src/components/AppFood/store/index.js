import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import listMenuSlice from "./listMenu-slice";
import menuSlice from "./menu-slice";

const store = configureStore({
    reducer : {
        nav : menuSlice.reducer,
        cart : cartSlice.reducer,
        listMenu : listMenuSlice.reducer,
    }
});

export default store