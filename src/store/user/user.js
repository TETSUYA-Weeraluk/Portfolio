import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        isLogin : localStorage.getItem('user') || null,
    },
    reducers : {
        login(state,action){
            localStorage.setItem(action.payload.key,action.payload.value)
            state.isLogin = localStorage.getItem('user')
            console.log(state.isLogin)
        },
        logout(state){
            localStorage.setItem('user',null)
            state.isLogin = localStorage.getItem('user')
            console.log(state.isLogin)
        }
    }
});

export const userAction = userSlice.actions;
export default userSlice;