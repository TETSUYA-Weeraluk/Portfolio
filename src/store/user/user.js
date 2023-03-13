import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: localStorage.getItem("user") || null,
    users: [],
    role : [],
    error: null,
    successCreatedPopup : false,
  },
  reducers: {
    login(state, action) {
      localStorage.setItem(action.payload.key, action.payload.value);
      state.isLogin = localStorage.getItem("user");
    },
    logout(state) {
      localStorage.setItem("user", null);
      state.isLogin = localStorage.getItem("user");
    },
    replaceUser(state, action) {
      state.users = action.payload;
      state.error = null;
    },
    replaceRole(state, action) {
      state.role = action.payload;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    popupRegisterToggle(state){
      state.successCreatedPopup = !state.successCreatedPopup
    }
  },
});

export const fetchUser = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:7777/api/users/getalluser");

      if (!response.ok) {
        throw new Error("Request get user fail");
      }

      const data = await response.json();
      return data;
    };

    try {
      const resData = await sendRequest();
      dispatch(userAction.replaceUser(resData));
    } catch (error) {
      dispatch(userAction.setError(error));
    }
  };
};

export const fetchRole = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:7777/api/users/getallrole");

      if (!response.ok) {
        throw new Error("Request get user fail");
      }

      const data = await response.json();
      return data;
    };

    try {
      const resData = await sendRequest();
      dispatch(userAction.replaceRole(resData));
    } catch (error) {
      dispatch(userAction.setError(error));
    }
  };
};


export const userAction = userSlice.actions;
export default userSlice;
