import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
const LoginWithSocialMedia = () => {
  return (
    <>
      <div className="text-center">
        <h2>Or login with </h2>
        <div className="flex justify-center gap-2 p-4">
          <a href="#" className="bg-white/70 rounded-full p-1 shadow-md">
            <FcGoogle size={20} />
          </a>
          <a
            href="#"
            className="bg-white/70 rounded-full p-1 text-[#4267B2] shadow-md"
          >
            <BsFacebook size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginWithSocialMedia;
