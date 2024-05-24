import React from 'react'
import { twMerge } from 'tailwind-merge'


const CarouselActions = ({children, className}) => {
  return (
    <div className={twMerge('w-full absolute inset-1 flex flex-row items-center', className)}>
        {children}
    </div>
  )
}

export default CarouselActions