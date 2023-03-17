import { createSlice } from "@reduxjs/toolkit";

const dataManagementSlice = createSlice({
  name: "dataManage",
  initialState: {
    data: [],
    error : null,
  },
  reducers: {
    replaceData(state, action) {
      state.data = action.payload;
    },
    setError(state,action){
        state.error = action.payload
    }
  },
});

export const getAllDataManagement = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await fetch(
        "http://localhost:7777/api/dashboard/getalldatamanagement"
      );
      if (!res.ok) {
        throw new Error("Request all data management fail");
      }
      const data = await res.json();
      return data;
    };

    try {
      const resData = await sendRequest();
      dispatch(dataManageAction.replaceData(resData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateDataManagement = (data) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await fetch(
        "http://localhost:7777/api/dashboard/updatedatamanagement",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        throw new Error("Request all data management fail");
      }
      const resData = await res.json();
      return resData;
    };

    try {
      const data = await sendRequest();
      if(data.error !== undefined){
            dispatch(dataManageAction.setError(data.error))
        }else{
              dispatch(dataManageAction.replaceData(data))
        }
    } catch (error) {
      console.log(error);
    }
  };
};




export const dataManageAction = dataManagementSlice.actions;

export default dataManagementSlice;
