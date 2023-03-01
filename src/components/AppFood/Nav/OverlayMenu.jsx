import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { menuAction } from '../store/menu-slice'

const OverlayMenu = () => {
  const dispatch = useDispatch()
  const closeNavbar = () => {
    dispatch(menuAction.toggleMenu())
  }
  const menuIsVisible = useSelector(state => state.nav.menuIsOpen)
  return (
    <div className={ menuIsVisible ? 'bg-black/70 h-screen z-10 w-full fixed' : ''} onClick={closeNavbar}></div>
  )
}

export default OverlayMenu