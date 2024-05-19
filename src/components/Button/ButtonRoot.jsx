import React from 'react'
import { twMerge } from 'tailwind-merge'

const ButtonRoot = ({children, ...rest}) => {
  return (
    <button {...rest} className={twMerge('flex flex-row gap-x-2 border bg-transparent px-2 rounded-sm', rest.className)}>
        {children}
    </button>
  )
}

export default ButtonRoot