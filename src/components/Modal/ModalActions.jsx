import React from 'react'

const ModalActions = ({children}) => {
  return (
    <div className="w-full flex flex-row justify-around items-end h-1/6 py-3">
        {children}
    </div>
  )
}

export default ModalActions