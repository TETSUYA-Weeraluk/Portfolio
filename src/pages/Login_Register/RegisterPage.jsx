import React from "react";
import bg from "../../assets/bg-register.jpg";

import FormRegister from "../../components/login-register/FormRegister";

const RegisterPage = () => {
  return (
    <div className="p-4">
      <img
        className="w-full h-screen object-cover blur-sm fixed top-0 left-0"
        src={bg}
        alt=""
      />
      <div className="flex h-screen justify-center items-center m-auto z-10 relative gap-5 max-w-xl">
        <div className="p-4 bg-white/50 flex flex-col gap-4 rounded-xl w-full  text-black/50">
          <h1 className="text-center text-5xl p-4 font-bold text-[#10857f]">
            Create new account
          </h1>
          <h2 className="text-center">
            Already A Member? <a href="#" className="text-[#10857f]">Log in</a>
          </h2>
          <FormRegister />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
