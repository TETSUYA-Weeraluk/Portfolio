import React from 'react'
import { useDispatch } from 'react-redux'
import { userAction } from '../../../store/user/user'

const HeaderDB = () => {
  const dispatch = useDispatch()
  const logOut = (e) => {
    dispatch(userAction.logout())
  }

  return (
    <div>
      <h2>Header DB</h2>
      <button onClick={logOut}>Log out</button>
    </div>
  )
}

export default HeaderDB