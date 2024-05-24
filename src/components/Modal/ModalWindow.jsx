import React from 'react'
import { twMerge } from 'tailwind-merge'

const ModalWindow = ({children, className}) => {
  return (
    <div className={twMerge('bg-skin-primary rounded-xl flex w-[90%] h-[90%] flex-col lg:w-[85%] lg:h-[85%] lg:flex-row relative overflow-hidden',className)}>
        {children}
    </div>
  )
}

export default ModalWindow