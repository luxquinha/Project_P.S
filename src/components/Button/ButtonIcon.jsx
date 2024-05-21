import React from 'react'
import { twMerge } from 'tailwind-merge'

const ButtonIcon = ({icon, className, action=null}) => {

  const handleClick = ()=>{
    if(action!==null)
      action()
    return
  }

  return (
    <div className={twMerge('text-skin-icon-primary hover:text-skin-icon-primary-hover hover:cursor-pointer justify-self-center', className)}
    onClick={handleClick}
    >
        {icon}
    </div>
  )
}

export default ButtonIcon