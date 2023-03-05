import React, { useState } from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAction } from "../../store/user/user";

const FormLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7777/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request fail");
      }

      const resdata = await response.json();
      if (resdata.error === "password is incorrect" || resdata.error === "User not found") {
        console.log(resdata.error);
        return;
      } else {
        const sendData = {
          key : 'user',
          value : resdata.token
        }
        dispatch(userAction.login(sendData))
        console.log('Login Success')
        navigate("/dashboard-admin");
      }
      setData({
        username: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={onSubmitHandler}>
        <div className="py-4 flex items-center gap-1 border-b">
          <AiOutlineMail color="black" size={20} />
          <input
            className=" bg-transparent outline-none w-full placeholder:text-black/50 "
            type="text"
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={changeHandler}
          />
        </div>
        <div className="py-4 flex items-center gap-1 border-b">
          <AiOutlineLock color="black" size={20} />
          <input
            className=" bg-transparent outline-none w-full placeholder:text-black/50 "
            type="password"
            placeholder="Username"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className="bg-[#598253] py-2 px-4 rounded-md text-white font-bold "
        >
          Login
        </button>
      </form>

      <p className="flex justify-center gap-2">
        Don't have a account ?{" "}
        <a href="#" className="text-[#598253]">
          Sign Up
        </a>
      </p>
    </>
  );
};

export default FormLogin;
