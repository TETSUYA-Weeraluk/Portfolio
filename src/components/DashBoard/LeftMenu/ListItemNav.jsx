import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const ListItemNav = (props) => {
    const {to , title} = props.data
  return (
    <Link to={`${to}`} className="flex items-center gap-5 ">
      <AiOutlineUser size={25} />
      <label>{title}</label>
    </Link>
  );
};

export default ListItemNav;
