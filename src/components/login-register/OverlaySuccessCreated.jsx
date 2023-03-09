import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import iconSuccess from '../../assets/icons8-ok.gif'
import { userAction } from "../../store/user/user";

const OverlaySuccessCreated = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const continueHandler = () => {
        dispatch(userAction.popupRegisterToggle())
        navigate('/tetsuya-login')
    }
  return (
    <>
      <div className="bg-black/70 fixed top-0 left-0 bottom-0 right-0 z-10"></div>
      <div className="fixed bg-white rounded-md text-center shadow z-20">
        <div className=" pt-10 pb-5 px-10 w-full mx-auto">
          <img className="w-[50px] mx-auto" src={iconSuccess} alt="" />
          <p className="">SUCCESS</p>
        </div>

        <div className=" pb-10 pt-5 px-10 bg-[#10857f] text-white rounded-b-md">
          <p>Your account has been successfully created.</p>
          <button onClick={continueHandler} className="px-4 py-1 bg-white text-[#10857f] hover:bg-white/80 rounded-full mt-4 shadow-lg">
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default OverlaySuccessCreated;
