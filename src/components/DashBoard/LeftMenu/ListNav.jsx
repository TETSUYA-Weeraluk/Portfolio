import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import ListItemNav from "./ListItemNav";

const ListNav = () => {
    const listItemNav = [
        {
            to : '/dashboard-admin',
            title : 'User'
        },
        {
            to : 'datamanament',
            title : 'Data Management'
        },
    ]
  return (
    <div className="p-4 text-white flex flex-col gap-5 text-lg">
      <p className="flex items-center gap-5">
        <MdOutlineDashboard size={25} />
        <label>Dashboard</label>
      </p>

      {listItemNav.map( (item) => (
        <ListItemNav data={item}/>
      ))}
    </div>
  );
};

export default ListNav;
