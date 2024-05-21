import React from 'react'

const ModalWindow = ({children}) => {
  return (
    <div className='w-[85%] h-3/4 bg-skin-primary rounded-xl flex flex-row relative overflow-hidden'>
        {children}
    </div>
  )
}

export default ModalWindow