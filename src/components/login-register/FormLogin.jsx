import React from "react";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

const FormLogin = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(e)
    }
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
          />
        </div>
        <div className="py-4 flex items-center gap-1 border-b">
          <AiOutlineLock color="black" size={20} />
          <input
            className=" bg-transparent outline-none w-full placeholder:text-black/50 "
            type="password"
            placeholder="Username"
            name="password"
          />
        </div>
        <button type="submit" className="bg-[#598253] py-2 px-4 rounded-md text-white font-bold ">
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