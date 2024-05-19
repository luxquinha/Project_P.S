import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputTextIcon = ({icon, className}) => {
  return (
    <button className={twMerge('bg-transparent rounded-full text-sm text-skin-icon-primary hover:cursor-pointer hover:scale-110', className)}>
        {icon}
    </button>
  )
}

export default InputTextIcon