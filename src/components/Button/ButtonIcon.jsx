import React from 'react'
import { twMerge } from 'tailwind-merge'

const ButtonIcon = ({icon, className}) => {
  return (
    <div className={twMerge('text-yellow-400 justify-self-center', className)}>
        {icon}
    </div>
  )
}

export default ButtonIcon