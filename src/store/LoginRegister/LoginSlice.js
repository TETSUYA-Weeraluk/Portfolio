import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name : 'login',
    initialState : {
        username : '',
        password : '',
    },
    reducers : {
    }
});

export const loginAction = loginSlice.actions;

export default loginSlice;