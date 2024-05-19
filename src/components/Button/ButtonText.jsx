import React from 'react'
import { twMerge } from 'tailwind-merge'

const ButtonText = ({text, ...rest}) => {
  return (
    <div {...rest} className={twMerge('tracking-widest text-sm', rest.className)}>
        {text}
    </div>
  )
}

export default ButtonText