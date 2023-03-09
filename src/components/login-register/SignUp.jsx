import React from 'react'
import {  useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <p className="flex justify-center gap-2">
        Don't have a account ?{" "}
        <button onClick={() => navigate('/tetsuya-register')} className="text-[#598253]">
          Sign Up
        </button>
      </p>
  )
}

export default SignUp