import React from 'react'
import { twMerge } from 'tailwind-merge'

const ButtonRoot = ({children, action, ...rest}) => {
  return (
    <button 
    {...rest} 
    // onClick={action()}
    className={twMerge('flex flex-row gap-x-2 bg-transparent rounded-sm', rest.className)}>
        {children}
    </button>
  )
}

export default ButtonRoot