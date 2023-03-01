import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { menuAction } from '../store/menu-slice';
import ListMenu from "./ListMenu";

const Narbar = () => {
  const dispatch = useDispatch();
  const closeNavbar = () => {
    dispatch(menuAction.toggleMenu())
  }
  const menuIsVisible = useSelector(state => state.nav.menuIsOpen)



  return (
    <div className= { menuIsVisible ? 'bg-white shadow-md top-0 left-0 w-[300px] h-screen z-50 duration-300 fixed p-4' : 'bg-white top-0 left-[-100%] w-[300px] h-screen z-50 duration-300 fixed p-4'}>
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">
          App <span className="font-bold">Food</span>
        </h1>
        <button onClick={closeNavbar} className='bg-zinc-200 rounded-full p-2'><AiOutlineClose /></button>
      </div>

      <div>
        <ListMenu />
      </div>
    </div>
  )
}

export default Narbar