import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
  name: 'homePageData',
  initialState: {
    data: [],
    error : null
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

export const fetchDataPortfolio = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "http://localhost:7777/api/dashboard/getalldatamanagement"
      );

      if (!response.ok) {
        throw new Error("Request get Data Portfolio fail");
      }

      const data = await response.json();
      return data;
    };

    try {
      const resData = await sendRequest();
      dispatch(homePageAction.replaceData(resData));
    } catch (error) {
      dispatch(homePageAction.setError(error));
    }
  };
};

export const homePageAction = homePageSlice.actions;
export default homePageSlice;
