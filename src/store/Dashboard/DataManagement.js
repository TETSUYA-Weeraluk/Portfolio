import { createSlice } from "@reduxjs/toolkit";

const dataManagementSlice = createSlice({
    name : 'dataManage',
    initialState : {
        data : []
    },
    reducers : {
        replaceData(state,action){
            state.data = action.payload
        }
    }
});

export const getAllDataManagement = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await fetch('http://localhost:7777/api/dashboard/getalldatamanagement')
            if(!res.ok){
                throw new Error('Request all data management fail');
            }

            const data = await res.json();
            return data; 
        }

        try {
            const resData = await sendRequest();
            dispatch(dataManageAction.replaceData(resData))
        } catch (error) {
            console.log(error)
        }
    }
}

export const dataManageAction = dataManagementSlice.actions;

export default dataManagementSlice;