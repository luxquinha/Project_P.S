import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputTextAction = ({icon, className, action, ...rest}) => {
  return (
    <button 
    {...rest}
    onClick={()=>{action()}} 
    className={twMerge('bg-transparent h-6 w-6 flex items-center justify-center rounded-full text-sm text-yellowLogo hover:bg-bgLight hover:cursor-pointer hover:scale-110', className)}>
        {icon}
    </button>
  )
}

export default InputTextAction