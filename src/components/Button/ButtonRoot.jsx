import React from 'react'
import { twMerge } from 'tailwind-merge'

const ButtonRoot = ({children, action=null, ...rest}) => {
  
  const handleClick = ()=>{
    if(action!==null)
      action()
    return
  }

  return (
    <button 
    {...rest} 
    onClick={handleClick}
    className={twMerge('flex flex-row gap-x-2 bg-transparent rounded-sm hover:cursor-pointer text-skin-inverted items-center', rest.className)}>
        {children}
    </button>
  )
}

export default ButtonRoot