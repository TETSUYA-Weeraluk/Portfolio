import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchRole, fetchUser } from "../../../store/user/user";
import CardUser from "./ContentUser/CardUser";

const ContentUser = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state=>state.user.users)

  useEffect( () => {
    dispatch(fetchUser());
    dispatch(fetchRole());
  },[dispatch])
 
  return (
    <div className="w-full bg-[#131313] p-4 text-white h-full">
        <div className="flex items-center gap-2 bg-[#252525] rounded-full py-2 px-4">
            <BsSearch size={20}/>
            <input className="w-full bg-transparent outline-none" type="text" placeholder="Search User"/>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-4">
        {currentUser.map((user) => (
          <CardUser key={user.id} fname={user.fname} lname={user.lname} id_role={user.id_role} name_role={user.name_role} username={user.username} email={user.email} />
        ))}
      </div>
    </div>
  );
};

export default ContentUser;
