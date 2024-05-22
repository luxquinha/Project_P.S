import React from 'react'
import { twMerge } from 'tailwind-merge'

const CardRoot = ({children, className}) => {
  return (
    <div className={twMerge('relative flex rounded-lg bg-skin-button-hover justify-end overflow-hidden hover:cursor-pointer', className)}>
        {children}
    </div>
  )
}

export default CardRoot