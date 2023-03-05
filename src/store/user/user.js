import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        isLogin : localStorage.getItem('user') || null,
    },
    reducers : {
        login(state,action){
            state.isLogin = action.payload
        },
        logout(state){
            state.isLogin = localStorage.setItem('user',null)
        }
    }
});

export const userAction = userSlice.actions;
export default userSlice;