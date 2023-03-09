import React from "react";
import BgLoginPage from "../../components/login-register/BgLoginPage";
import ContentLogin from "../../components/login-register/ContentLogin";

const LoginPage = () => {
  return (
    <div className="p-4">
      <BgLoginPage/>
      <main>
        <ContentLogin />
      </main>
    </div>
  );
};

export default LoginPage;
