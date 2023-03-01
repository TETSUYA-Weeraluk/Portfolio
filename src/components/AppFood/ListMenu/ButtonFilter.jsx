import React from 'react'
import { useDispatch } from 'react-redux'
import { listMenuAction } from '../store/listMenu-slice'

const ButtonFilter = () => {
  const dispatch = useDispatch()


  const onChangeFilterType = (e) => {
    dispatch(listMenuAction.filterType(e.target.value))
  }


  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 justify-end my-4'>
        <button onClick={onChangeFilterType} value='all' className='px-4 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
        <button onClick={onChangeFilterType} value='burger' className='px-4 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
        <button onClick={onChangeFilterType} value='pizza' className='px-4 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
        <button onClick={onChangeFilterType} value='salad' className='px-4 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
        <button onClick={onChangeFilterType} value='chicken' className='px-4 py-2 rounded-lg border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
    </div>
  )
}

export default ButtonFilter