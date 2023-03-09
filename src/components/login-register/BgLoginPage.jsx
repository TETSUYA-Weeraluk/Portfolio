import React from "react";
import bg from '../../assets/bg-login-register.jpg'
const BgLoginPage = () => {
  return (
    <img
      className="w-full h-screen object-cover blur-sm fixed top-0 left-0"
      src={bg}
      alt=""
    />
  );
};

export default BgLoginPage;
