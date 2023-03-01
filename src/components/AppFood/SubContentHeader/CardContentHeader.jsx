import React from 'react'

const CardContentHeader = (props) => {
  return (
    <div className='relative shadow-xl' >
        <div className='rounded-lg absolute bg-black/50 w-full h-full text-white p-4'>
            <h1 className='font-bold'>{props.data.title}</h1>
            <span className=''>{props.data.descriptions}</span>
            <button className='absolute bottom-4 right-4 px-4 py-2 bg-white text-black rounded-lg hover:bg-orange-600 hover:text-white'>Order Now</button>
        </div>
        <img className='w-full rounded-lg' src={props.data.image} alt="" />
    </div>
  )
}

export default CardContentHeader