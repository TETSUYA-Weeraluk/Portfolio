import React from 'react'
import CardContentHeader from './SubContentHeader/CardContentHeader'

const dataSubContent = [
    {
        id : 1 , 
        title : `Sun's Out, BOGO's Out` ,
        descriptions : 'Through 8/26',
        image : 'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
        id : 2 , 
        title : `New Restaurants` ,
        descriptions : 'Added Daily',
        image : 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
        id : 3 , 
        title : `We Deliver Desserts Too` ,
        descriptions : 'Tasty Treats',
        image : 'https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },

]

const SubContentHeader = () => {
    return (
    <div className='grid sm:grid-cols-3 md:grid-cols-3 gap-5'>
       {dataSubContent.map( (data) => (
         <CardContentHeader key={data.id} data={data} />
       ))}
    </div>
  )
}

export default SubContentHeader