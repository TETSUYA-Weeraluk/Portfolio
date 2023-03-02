import React from "react";
import bg from "../../assets/bg-login-register.jpg";

import FormLogin from "../../components/login-register/FormLogin";
import LoginWithSocialMedia from "../../components/login-register/LoginWithSocialMedia";
const LoginPage = () => {
  return (
    <div className="p-4">
      <img
        className="w-full h-screen object-cover blur-sm fixed top-0 left-0"
        src={bg}
        alt=""
      />
      <div className="flex h-screen justify-center items-center m-auto z-10 relative gap-5 max-w-xl">
        <div className="p-4 bg-white/50 flex flex-col gap-4 rounded-xl w-full  text-black/50">
          <h1 className="text-center text-5xl p-4 font-bold text-[#598253]">
            Login
          </h1>
          <FormLogin />
          <LoginWithSocialMedia />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
