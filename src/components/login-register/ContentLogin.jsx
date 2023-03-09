import React from "react";
import FormLogin from "./FormLogin";
import LoginWithSocialMedia from "./LoginWithSocialMedia";
import SignUp from "./SignUp";

const ContentLogin = () => {
  return (
    <div className="flex h-screen justify-center items-center m-auto z-10 relative gap-5 max-w-xl">
      <div className="p-4 bg-white/50 flex flex-col gap-4 rounded-xl w-full  text-black/50">
        <h1 className="text-center text-5xl p-4 font-bold text-[#598253]">
          Login
        </h1>

        <FormLogin />
        <SignUp/>
        <LoginWithSocialMedia />
      </div>
    </div>
  );
};

export default ContentLogin;
