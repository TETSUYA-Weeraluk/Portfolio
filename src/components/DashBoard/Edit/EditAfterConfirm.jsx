import React from "react";
import { useDispatch } from "react-redux";
import imgSuccess from '../../../assets/icons8-ok.gif'
import { userEditAction } from "../../../store/user/userEditSlice";
const EditAfterConfirm = () => {
    const dispatch = useDispatch();
    const closePopupHandler = () => {
        dispatch(userEditAction.setPopupSuccess(false));
    }
  return (
    <>
      <div onClick={closePopupHandler} className="bg-black/70 fixed top-0 bottom-0 left-0 right-0 z-10"></div>
      <div className="fixed flex items-center top-0 bottom-0 left-0 right-0 justify-center z-20">
        <div className="bg-white p-4 text-black rounded-md">
            <img className="mx-auto" src={imgSuccess} alt="" />
            <h2 className="text-xl font-bold mt-3">Update successfully</h2>
            <button onClick={closePopupHandler} className="bg-[#4db051] py-1 px-4 rounded-full mt-4 shadow-md hover:bg-[#4db051]/80">Close</button>
        </div>
      </div>
    </>
  );
};

export default EditAfterConfirm;
