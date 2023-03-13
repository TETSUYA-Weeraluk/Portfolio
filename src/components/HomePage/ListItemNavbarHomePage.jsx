import React from "react";
import { Link as Scrolling } from "react-scroll";
const ListItemNavbarHomePage = (props) => {
  const {to , title} = props.data
  return (
    <li>
      <Scrolling
        to={to}
        smooth="true"
        duration={700}
        className="hover:border-b-2 border-[#062743]"
      >
        {title}
      </Scrolling>
    </li>
  );
};

export default ListItemNavbarHomePage;
