import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonBack = () => {
    const navigate = useNavigate();
  return (
    <div className='text-left'>
         <button className='bg-white text-black py-1 px-4 rounded-md shadow-md shadow-white hover:bg-white/90' onClick={() => navigate(-1)}>go back</button>
    </div>
  )
}

export default ButtonBack