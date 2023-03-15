import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserEdit } from "../../store/user/userEditSlice";
import EditAfterConfirm from "./Edit/EditAfterConfirm";
import EditProfileConfirm from "./Edit/EditProfileConfirm";
import EditProfileUser from "./Edit/EditProfileUser";
import EditRoleUser from "./Edit/EditRoleUser";

const EditUser = () => {
  const editPopupIsShow = useSelector(state=> state.userEdit.editPopupShow);
  const currentDataUser = useSelector(state=> state.userEdit.currentDataUser);
  const isLoading = useSelector((state) => state.userEdit.isLoading);
  const error = useSelector((state) => state.userEdit.error);
  const editPopupSuccessIsShow = useSelector(state => state.userEdit.editPopupSuccess)

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserEdit(params));
  }, [dispatch, params]);

  let content = "";

  if (isLoading) {
    content = <h2 className="text-3xl">Loading data....</h2>;
  }

  if (error) {
    content = <h2 className="text-3xl">{error}</h2>;
  }

  return (
      <div className="max-w-xl mx-auto mt-5">
       {editPopupSuccessIsShow && <EditAfterConfirm />}
        {editPopupIsShow && <EditProfileConfirm />}
        {isLoading && content}
        {error && content}
        {currentDataUser !== undefined && !isLoading && !error && (
          <div className="w-full bg-[#252525] p-4 rounded-md flex flex-col gap-4">
            <EditProfileUser
              title="Username"
              value={currentDataUser.username}
              name="username"
            />
            <EditProfileUser
              title="First Name"
              value={currentDataUser.fname}
              name="fname"
            />
            <EditProfileUser
              title="Last Name"
              value={currentDataUser.lname}
              name="lname"
            />
            <EditProfileUser
              title="Email"
              value={currentDataUser.email}
              name="email"
            />
            <EditRoleUser
              title="Role"
              nameRole={currentDataUser.name_role}
              value={currentDataUser.id_role}
              name="id_role"
            />
          </div>
        )}
      </div>
  );
};

export default EditUser;
