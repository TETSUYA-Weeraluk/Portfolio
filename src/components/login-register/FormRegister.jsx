import React, { useState } from "react";
import { BiIdCard } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiIdentification } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { registerAction } from "../../store/LoginRegister/RegisterSlice";

const FormRegister = () => {
  const [stateForm, setStateForm] = useState({
    username: "",
    password: "",
    fname: "",
    lname: "",
    email: "",
  });

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setStateForm({ ...stateForm, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(registerAction.registerSubmit(stateForm));
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
              value={stateForm.username}
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
              value={stateForm.password}
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
              value={stateForm.fname}
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
              value={stateForm.lname}
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
              value={stateForm.email}
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
