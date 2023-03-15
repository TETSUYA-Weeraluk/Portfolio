import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userEditAction } from "../../../store/user/userEditSlice";

const EditProfileConfirm = () => {
  const dispatch = useDispatch();
  const currentData = useSelector((state) => state.userEdit.valueChange);
  const dataUserEdit = useSelector((state) => state.userEdit.dataUserEdit);

  const cancelPopupConfirm = () => {
    dispatch(userEditAction.cancelPopupConfirm());
  };

  const updateDataUser = async (data) => {
    const res = await fetch("http://localhost:7777/api/users/updateuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Request update data User fail");
    }

    const resData = await res.json();
    return resData;
  };

  const onClinkConfirmHandler = async () => {
    const data = {
      title: currentData.name,
      value: currentData.value,
      valueEdit: dataUserEdit,
    };
    try {
      const resData = await updateDataUser(data);
      dispatch(userEditAction.replaceDataUser(resData))
      dispatch(userEditAction.setPopupSuccess(true))
    } catch (error) {
      console.log(error);
    }
    dispatch(userEditAction.cancelPopupConfirm());
    
  };

  return (
    <>
      <div className="bg-black/70 fixed top-0 bottom-0 left-0 right-0 z-10"></div>
      <div className="fixed flex items-center top-0 bottom-0 left-0 right-0 justify-center z-20">
        <div className="bg-white p-4 text-black rounded-md">
          <h2 className="text-xl font-bold">
            Confirm change of personal information
          </h2>
          <div className="flex flex-col p-4">
            <div className="flex gap-2 items-center">
              <p className=" font-medium ">{currentData.title} : </p>
              <span className="font-light text-sm text-[#5a5a5a]">
                {currentData.value}
              </span>
              <p>
                ={">"}{" "}
                <span className="font-light text-sm text-[#5a5a5a]">
                  {dataUserEdit}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-end mt-5">
            <button
              onClick={onClinkConfirmHandler}
              className="px-4 py-2 bg-[#68c930] text-white rounded-md border hover:text-[#68c930] hover:border-[#68c930] hover:border hover:bg-white"
            >
              Confirm
            </button>
            <button
              onClick={cancelPopupConfirm}
              className="px-4 py-2 bg-[#c93030] text-white rounded-md border hover:text-[#c93030] hover:border-[#c93030] hover:bg-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileConfirm;
