import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BgLoginPage from "../../components/login-register/BgLoginPage";
import ContentLogin from "../../components/login-register/ContentLogin";

const LoginPage = () => {
  const currentUser = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    const checkIsLogin = async () => {
      try {
        const response = await fetch(
          "http://localhost:7777/api/users/checkuser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: currentUser }),
          }
        );

        if (!response.ok) {
          throw new Error("Request Fail");
        }

        const dataRes = await response.json();
        if (dataRes.token === currentUser) {
          navigate("/dashboard-admin");
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkIsLogin();
  }, [currentUser,navigate]);

  return (
    <div className="p-4">
      <BgLoginPage />
      <main>
        <ContentLogin />
      </main>
    </div>
  );
};

export default LoginPage;
