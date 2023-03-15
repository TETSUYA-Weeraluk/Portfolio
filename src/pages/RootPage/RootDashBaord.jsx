import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import HeaderDB from "../../components/DashBoard/HeaderDB/HeaderDB";
import Menu from "../../components/DashBoard/LeftMenu/Menu";
import { userAction } from "../../store/user/user";

const RootDashBaord = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.isLogin);
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
        if (dataRes.token !== currentUser) {
          navigate("/tetsuya-login");
          return;
        }
        dispatch(userAction.login(dataRes.token))
      } catch (error) {
        console.log(error);
      }
    };
    checkIsLogin();
  }, [dispatch , currentUser , navigate]);

 


  return <>
    {currentUser !== null  && 
    
    <div className="flex h-full">
      
      <Menu />
      <div className="w-full h-full bg-[#131313]">
        <HeaderDB />
      <Outlet />
      </div>
    </div>
     }
    {currentUser === null && <Navigate to="/" replace />}
  </>;
};

export default RootDashBaord;
