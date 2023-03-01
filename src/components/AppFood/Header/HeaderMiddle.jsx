import React from "react";
import { Link as Scroll } from 'react-scroll'

const HeaderMiddle = () => {
  return (
    <>
      <div className="font-bold sm:flex items-center gap-4 hidden">
        <Scroll to='menu'  smooth={true} className="hover:border-b-2 hover:border-orange-600">
          Menu
        </Scroll>
        <Scroll to='contact' smooth={true} className="hover:border-b-2 hover:border-orange-600">
          Contact
        </Scroll>
      </div>
    </>
  );
};

export default HeaderMiddle;
