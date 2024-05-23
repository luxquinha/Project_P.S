import React from 'react'
import { twMerge } from 'tailwind-merge'

const CardImage = ({children=null, url, className}) => {
  return (
    <div 
    className={twMerge('w-full h-[80%] bg-cover bg-center rounded-l-lg flex flex-col justify-end shrink-0', className)}
    style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat'
    }}>
      {children!==null&& children}
    </div>
  )
}

export default CardImage