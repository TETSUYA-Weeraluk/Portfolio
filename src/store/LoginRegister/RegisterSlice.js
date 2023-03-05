import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name : 'register',
    initialState : {
        username : '',
        password : '',
        fname : '',
        lname : '',
        email : '',
    },
    reducers : {
    }
});



export const registerAction = registerSlice.actions;

export default registerSlice;