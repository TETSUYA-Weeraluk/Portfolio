import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderRegisterPage = () => {
  const navigate = useNavigate()
  return (
    <>
         <h2 className="text-center text-5xl p-4 font-bold text-[#10857f]">Create new account</h2>
          
          <p className="flex justify-center gap-2">
            <label>Already A Member?</label>
            <button onClick={() => navigate('/tetsuya-login') } className="text-[#10857f]">Log in</button>
          </p>
          
    </>
  )
}

export default HeaderRegisterPage