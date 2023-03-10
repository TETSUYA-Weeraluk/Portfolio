import React, { useEffect, useState } from "react";
import { AiFillWarning, AiOutlineLock, AiOutlineMail } from "react-icons/ai";
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
  const [error, setError] = useState(null);
  const [validateInput , setValidateInput] = useState({})
  const [isSubmit , setIsSubmit] = useState(false)

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setValidateInput(validate(data))
    setIsSubmit(true)
  };

  useEffect( () => {
    const sendRequest = async () => {
      try {
        setError(null);
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
        if (
          resdata.error === "password is incorrect" ||
          resdata.error === "User not found"
        ) {
          console.log(resdata.error);
          setError(resdata.error);
          return;
        } else {
          const sendData = {
            key: "user",
            value: resdata.token,
          };
          dispatch(userAction.login(sendData));
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

    if(Object.keys(validateInput).length === 0 && isSubmit){
      sendRequest();
    }
  },[validateInput])

  const validate = (value) => {
    const errorMessage = {};
    if(!value.username){
      errorMessage.username = "Username is required!";
    }
    if (!value.password) {
      errorMessage.password = "Password is required";
    }
    return errorMessage;
  }

  let cssWarningUser = "border-b";
  let cssWarningPassword = "border-b";

  if (error === "User not found" || validateInput.username) {
    cssWarningUser = "border-red-600 border rounded-full";
  } 
  
  if (error === "password is incorrect" || validateInput.password) {
    cssWarningPassword = "border-red-600 border rounded-full ";
  }

  return (
    <>
      <form className="flex flex-col gap-2">
        <div
          className={`p-4 flex items-center gap-1 ${cssWarningUser}`}
        >
          <AiOutlineMail color="black" size={20} />
          <input
            className=" bg-transparent outline-none w-full placeholder:text-black/50  "
            type="text"
            placeholder="Username"
            name="username"
            value={data.username}
            onChange={changeHandler}
          />
        </div>

        {validateInput.username && <p className="text-red-700 font-light">{validateInput.username}</p>}

        <div
          className={`p-4 flex items-center gap-1 ${cssWarningPassword}`}
        >
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
        {validateInput.password && <p className="text-red-700 font-light">{validateInput.password}</p>}
        {error !== null && (
          <p className="text-red-600 flex items-center gap-2 underline">
            <AiFillWarning />
            <label>{error}</label>
          </p>
        )}

        <button
          onClick={onSubmitHandler}
          type="submit"
          className="bg-[#598253] py-2 px-4 rounded-md text-white font-bold "
        >
          Login
        </button>
      </form>
    </>
  );
};

export default FormLogin;
