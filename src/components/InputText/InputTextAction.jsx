import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputTextAction = ({icon, className, action, ...rest}) => {
  return (
    <button 
    {...rest}
    onClick={()=>{action()}} 
    className={twMerge('bg-transparent h-7 w-7 flex items-center justify-center rounded-md text-sm text-skin-icon-primary hover:text-skin-icon-primary-hover hover:bg-skin-button-hover hover:cursor-pointer hover:scale-110', className)}>
        {icon}
    </button>
  )
}

export default InputTextAction