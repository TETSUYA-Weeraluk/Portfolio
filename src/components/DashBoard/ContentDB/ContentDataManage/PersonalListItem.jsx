import React from 'react'

const PersonalListItem = (props) => {
    const {title , descriptions  , icons_img , link_info} = props.data

    let listItem = <></>
    if(link_info){
        listItem = <li><a className='flex items-center gap-2' href={link_info}><img className='w-[20px]' src={icons_img} alt="" />{descriptions}</a></li>
    }else{
        listItem = <li><p className='flex items-center gap-2'><img className='w-[20px]' src={icons_img} alt="" />{descriptions}</p></li>
    }
  return (
    <>
        {listItem}
    </>
  )
}

export default PersonalListItem