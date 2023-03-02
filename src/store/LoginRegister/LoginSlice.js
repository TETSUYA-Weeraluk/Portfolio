import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name : 'login',
    initialState : {
        username : '',
        password : '',
    },
    reducers : {
        submitLogin(state,action){
            console.log(action.payload.username)
            console.log(action.payload.password)
        }
    }
});

export const loginAction = loginSlice.actions;

export default loginSlice;