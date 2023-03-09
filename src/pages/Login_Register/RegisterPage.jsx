import React from "react";
import BgRegisterPage from "../../components/login-register/BgRegisterPage";
import ContentRegister from "../../components/login-register/ContentRegister";

const RegisterPage = () => {
  return (
    <div className="p-4">
      <BgRegisterPage />
      <main>
        <ContentRegister/>
      </main>
    </div>
  );
};

export default RegisterPage;
