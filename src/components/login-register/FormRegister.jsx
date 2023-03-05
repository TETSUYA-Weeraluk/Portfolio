import React, { useState } from "react";
import { BiIdCard } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiIdentification } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

const FormRegister = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    fname: "",
    lname: "",
    email: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:7777/api/users/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Request fail");
      }
      const resdata = await response.json();
      console.log(resdata);
      setData({
        username: "",
        password: "",
        fname: "",
        lname: "",
        email: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 py-2 px-4 bg-white/60 rounded-xl">
          <p className=" text-xs">Username</p>
          <div className="flex">
            <input
              className="w-full bg-transparent outline-none text-black"
              type="text"
              name="username"
              value={data.username}
              onChange={changeHandler}
            ></input>
            <BiIdCard size={20} />
          </div>
        </div>
        <div className="col-span-2 py-2 px-4 bg-white/60 rounded-xl">
          <p className=" text-xs">Password</p>
          <div className="flex">
            <input
              className="w-full bg-transparent outline-none text-black"
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
            ></input>
            <RiLockPasswordLine size={20} />
          </div>
        </div>
        <div className="col-span-1 py-2 px-4 bg-white/60 rounded-xl">
          <p className=" text-xs">First name</p>
          <div className="flex">
            <input
              className="w-full bg-transparent outline-none text-black"
              type="text"
              name="fname"
              value={data.fname}
              onChange={changeHandler}
            ></input>
            <HiIdentification size={20} />
          </div>
        </div>
        <div className="col-span-1 py-2 px-4 bg-white/60 rounded-xl">
          <p className=" text-xs">Last name</p>
          <div className="flex">
            <input
              className="w-full bg-transparent outline-none text-black"
              type="text"
              name="lname"
              value={data.lname}
              onChange={changeHandler}
            ></input>
            <HiIdentification size={20} />
          </div>
        </div>
        <div className="col-span-2 py-2 px-4 bg-white/60 rounded-xl">
          <p className=" text-xs">Email</p>
          <div className="flex">
            <input
              className="w-full bg-transparent outline-none text-black"
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
            ></input>
            <AiOutlineMail size={20} />
          </div>
        </div>
      </div>
      <button
        onClick={onSubmitHandler}
        type="submit"
        className="py-2 px-4 rounded-md text-white font-bold bg-[#10857f] mt-4 w-full"
      >
        Create account
      </button>
    </form>
  );
};

export default FormRegister;
