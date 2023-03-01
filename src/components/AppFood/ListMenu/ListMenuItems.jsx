import React from "react";
import { useSelector } from "react-redux";
import CardListMenu from "./CardListMenu";

const ListMenuItems = () => {
  const filterType = useSelector(state=>state.listMenu.dataFilter)
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {filterType.map( (listMenudata) => (
            <CardListMenu key={listMenudata.id} data={listMenudata}/>    
        ))}
    </div>
  );
};

export default ListMenuItems;
