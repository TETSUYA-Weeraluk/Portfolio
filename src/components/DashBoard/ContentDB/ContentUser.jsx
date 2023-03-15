import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRole, fetchUser } from "../../../store/user/user";
import CardUser from "./ContentUser/CardUser";
import InputUser from "./ContentUser/InputUser";

const ContentUser = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.users);
  const currentUserFilter = useSelector((state) => state.user.usersFilter);

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchRole());
  }, [dispatch,currentUser]);
  return (
    <div className="w-full  p-4 text-white ">
      <InputUser />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-4">
        {currentUserFilter.length > 0 ? (
          <>
            {currentUserFilter.map((user) => (
              <CardUser
                key={user.id}
                id={user.id}
                fname={user.fname}
                lname={user.lname}
                id_role={user.id_role}
                name_role={user.name_role}
                username={user.username}
                email={user.email}
              />
            ))}
          </>
        ) : (
          <>
            {currentUser.map((user) => (
              <CardUser
                key={user.id}
                id={user.id}
                fname={user.fname}
                lname={user.lname}
                id_role={user.id_role}
                name_role={user.name_role}
                username={user.username}
                email={user.email}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ContentUser;
