import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name : 'menuSlice',
    initialState : {menuIsOpen : false },
    reducers : {
        toggleMenu(state) {
            state.menuIsOpen = !state.menuIsOpen;
        }
    }
});

export const menuAction = menuSlice.actions;

export default menuSlice;