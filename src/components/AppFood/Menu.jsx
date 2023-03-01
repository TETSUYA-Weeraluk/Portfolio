import React from 'react'
import ListMenuItems from './ListMenu/ListMenuItems'
import MenuFilterType from './ListMenu/MenuFilterType'

const Menu = () => {
  
  return (
    <div className='my-4 md:p-4' id='menu'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-orange-600 text-center'>List Menu Items</h1>
        <MenuFilterType />
        <ListMenuItems />
    </div>
  )
}

export default Menu