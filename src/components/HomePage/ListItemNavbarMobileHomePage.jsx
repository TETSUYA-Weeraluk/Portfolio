import React from "react";

const ListItemNavbarMobileHomePage = (props) => {
    const {to , title} = props
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

export default ListItemNavbarMobileHomePage;
