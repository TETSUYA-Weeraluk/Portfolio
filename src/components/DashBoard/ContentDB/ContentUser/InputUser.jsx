import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { userAction } from "../../../../store/user/user";

const InputUser = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const filterUser = (e) => {
    setSearchInput(e);
    dispatch(userAction.setUsersFilter(e));
  };

  return (
    <div className="flex items-center gap-2 bg-[#252525] rounded-full py-2 px-4">
      <BsSearch size={20} />
      <input
        onChange={(e) => filterUser(e.target.value)}
        className="w-full bg-transparent outline-none"
        type="text"
        placeholder="Search User"
        value={searchInput}
      />
    </div>
  );
};

export default InputUser;
