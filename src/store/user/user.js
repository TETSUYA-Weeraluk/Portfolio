import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: localStorage.getItem("user") || null,
    users: [
      {
        email: "",
        fname: "",
        id: 0,
        id_role: 0,
        lname: "",
        name_role: "",
        username: "",
      },
      {
        email: "",
        fname: "",
        id: 1,
        id_role: 0,
        lname: "",
        name_role: "",
        username: "",
      },
    ],
    role: [],
    error: null,
    successCreatedPopup: false,
    usersFilter: [],
    navIsShow : false,
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
    popupRegisterToggle(state) {
      state.successCreatedPopup = !state.successCreatedPopup;
    },
    setUsersFilter(state, action) {
      if (action.payload) {
        state.usersFilter = state.users.filter(
          (user) =>
            user.username
              .toLowerCase()
              .includes(action.payload.toLowerCase()) ||
            user.email.toLowerCase().includes(action.payload.toLowerCase())
        );
      } else {
        state.usersFilter = state.users;
      }
    },
    toggleNav(state){
      state.navIsShow = !state.navIsShow
    }
  },
});

export const fetchUser = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "http://localhost:7777/api/users/getalluser"
      );

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
      const response = await fetch(
        "http://localhost:7777/api/users/getallrole"
      );

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


export const deleteUser = (id) => {
  return async (dispatch) => {
      const sendRequest = async () => {
      const res = await fetch("http://localhost:7777/api/users/deleteUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id : id}),
      });

      if (!res.ok) {
        throw new Error("Request get data user fail");
      }

      const resData = await res.json();
      return resData;
    };
    
    try {
      const data = await sendRequest();
      if(data.error){
        console.log(data.error)
      }else{
        dispatch(userAction.replaceRole(data));
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export const userAction = userSlice.actions;
export default userSlice;
