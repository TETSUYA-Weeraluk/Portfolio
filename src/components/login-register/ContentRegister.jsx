import React from 'react'
import { useSelector } from 'react-redux'
import FormRegister from './FormRegister'
import HeaderRegisterPage from './HeaderRegisterPage'
import OverlaySuccessCreated from './OverlaySuccessCreated'
const ContentRegister = () => {
  const isPopupShow = useSelector(state=>state.user.successCreatedPopup)
  return (
    <div className="flex h-screen justify-center items-center m-auto z-10 relative gap-5 max-w-xl">
        {isPopupShow && <OverlaySuccessCreated />}

        <div className="p-4 bg-white/50 flex flex-col gap-4 rounded-xl w-full  text-black/50">
          <header>
            <HeaderRegisterPage/>
          </header>
          <main>
          <FormRegister />
          </main>
        </div>
      </div>
  )
}

export default ContentRegister