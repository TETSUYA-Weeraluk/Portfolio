import { createSlice } from "@reduxjs/toolkit";

const userEditSlice = createSlice({
  name: "useredit",
  initialState: {
    currentDataUser : [],
    dataUserEdit: [],
    editPopupShow: false,
    error : null,
    isLoading : false,
    valueChange : {},
  },
  reducers: {
    editPopupConfirm(state,action) {
      state.valueChange = action.payload
      state.editPopupShow = !state.editPopupShow;
    },
    cancelPopupConfirm(state){
      state.editPopupShow = !state.editPopupShow
    },
    replaceDataUser(state,action){
        state.currentDataUser = action.payload
    },
    setError(state,action){
        state.error = action.payload
    },
    setIsLoading(state,action){
        state.isLoading = action.payload
    },
    inputChangeDataHandler(state,action){
        state.dataUserEdit = action.payload
    },
  },
});

export const getUserEdit = (username) => {
  return async (dispatch) => {
    const sendRequest = async () => {
        dispatch(userEditAction.setIsLoading(true))
      const res = await fetch("http://localhost:7777/api/users/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(username),
      });

      if (!res.ok) {
        throw new Error("Request get data user fail");
      }

      const resData = await res.json();
      return resData;
    };

    try {
        const data = await sendRequest();
        if(data.error !== undefined){
            dispatch(userEditAction.setError(data.error))
        }else{
              dispatch(userEditAction.replaceDataUser(data))
        }
        dispatch(userEditAction.setIsLoading(false))
    } catch (error) {
        dispatch(userEditAction.setError(error))
    }
  };
};



export const userEditAction = userEditSlice.actions;

export default userEditSlice;
