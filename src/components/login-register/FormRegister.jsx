import React, { useEffect, useState } from "react";
import { BiIdCard } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiIdentification } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { userAction } from "../../store/user/user";
import FormInput from "./FormInput";

const FormRegister = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
    fname: "",
    lname: "",
    email: "",
  });

  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setFormError(validate(data));
    setIsSubmit(true);
  };

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          "http://localhost:7777/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          throw new Error("Request fail");
        }
        const resdata = await response.json();
        if (resdata === "User already exists!") {
          return;
        } else {
          setData({
            username: "",
            password: "",
            fname: "",
            lname: "",
            email: "",
          });
          dispatch(userAction.popupRegisterToggle());
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (Object.keys(formError).length === 0 && isSubmit) {
      sendRequest();
    }
  }, [formError , data , dispatch , isSubmit]);

  const validate = (value) => {
    const errorMessage = {};
    const emailFormat = value.email.includes("@");
    if (!value.username) {
      errorMessage.username = "Username is required!";
    }
    if (!value.password) {
      errorMessage.password = "Password is required";
    }
    if (!value.fname) {
      errorMessage.fname = "Fist name is required!";
    }
    if (!value.lname) {
      errorMessage.lname = "Last name is required!";
    }
    if (!value.email) {
      errorMessage.email = "Email is required!";
    } else if (!emailFormat) {
      errorMessage.email = "This is not a valid email format!";
    }
    
    return errorMessage;
  };

  const Inputs = [
    {
      id: 1,
      colspan: 2,
      onChangeInput: changeHandler,
      value: data.username,
      title: "Username",
      name: "username",
      type: "text",
      icon: <BiIdCard size={20} />,
      formerror : formError.username
    },
    {
      id: 2,
      colspan: 2,
      onChangeInput: changeHandler,
      value: data.password,
      title: "Password",
      name: "password",
      type: "password",
      icon: <RiLockPasswordLine size={20} />,
      formerror : formError.password
    },
    {
      id: 3,
      colspan: 1,
      onChangeInput: changeHandler,
      value: data.fname,
      title: "First name",
      name: "fname",
      type: "text",
      icon: <HiIdentification size={20} />,
      formerror : formError.fname
    },
    {
      id: 4,
      colspan: 1,
      onChangeInput: changeHandler,
      value: data.lname,
      title: "Last name",
      name: "lname",
      type: "text",
      icon: <HiIdentification size={20} />,
      formerror : formError.lname
    },
    {
      id: 5,
      colspan: 2,
      onChangeInput: changeHandler,
      value: data.email,
      title: "Email",
      name: "email",
      type: "email",
      icon: <AiOutlineMail size={20} />,
      formerror : formError.email
    },
  ];

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="grid grid-cols-2 gap-5">
        {Inputs.map((data) => (
           <FormInput key={data.id} {...data} />
        ))}
      </div>

      <button
        type="submit"
        className="py-2 px-4 rounded-md text-white font-bold bg-[#10857f] mt-4 w-full"
      >
        Create account
      </button>
    </form>
  );
};

export default FormRegister;
