import React from 'react'
import { twMerge } from 'tailwind-merge'

const ButtonIcon = ({icon, className, action}) => {
  return (
    <div className={twMerge('text-skin-icon-primary hover:text-skin-icon-primary-hover justify-self-center', className)}
    onClick={action}
    >
        {icon}
    </div>
  )
}

export default ButtonIcon