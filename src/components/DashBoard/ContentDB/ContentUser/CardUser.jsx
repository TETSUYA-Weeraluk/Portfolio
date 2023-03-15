import React from "react";
import {
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import imgTest from "../../../../assets/myPhoto1.jpg";
import { deleteUser } from "../../../../store/user/user";

const CardUser = (props) => {
  const { username, fname, lname, email, name_role, id } = props;
  const dispatch = useDispatch();

  const deleteUserHandler = async () => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="flex flex-col gap-5 bg-[#252525] p-2  rounded-xl ">
      <div className="flex items-center gap-3">
        <img className="w-[50px] h-[50px]" src={imgTest} alt="" />
        <div className="flex flex-col gap-2">
          <p className=" text-2xl">{username}</p>
          <p className=" text-sm flex items-center gap-1">
            <AiOutlineUser /> : {fname} <span>{lname}</span>
          </p>
          <p className=" text-sm flex items-center gap-1">
            <AiOutlineMail /> : {email}
          </p>
          <p className=" text-xs">Role : {name_role}</p>
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <div className="">
          <Link
            to={`edit/${username}`}
            className="flex items-center gap-2 border py-1 px-2 rounded-md bg-[#bea619]"
          >
            <AiOutlineEdit size={20} />
            Edit
          </Link>
        </div>
        <button
          onClick={deleteUserHandler}
          className="flex items-center gap-2 border py-1 px-2 rounded-md bg-[#be1919]"
        >
          <AiOutlineClose size={20} />
          Delete
        </button> 
      </div>
    </div>
  );
};

export default CardUser;
