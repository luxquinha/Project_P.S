import React from 'react'
import { twMerge } from 'tailwind-merge'

const ButtonIcon = ({icon, className}) => {
  return (
    <div className={twMerge('text-skin-icon-primary hover:text-skin-icon-primary-hover justify-self-center', className)}>
        {icon}
    </div>
  )
}

export default ButtonIcon