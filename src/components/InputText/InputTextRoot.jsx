import React from 'react'
import useThemeContext from '../../hooks/useTheme'
import { twMerge } from 'tailwind-merge'

const InputText = ({children, ...rest}) => {
  const { show } = useThemeContext()
  return (
    <div 
    {...rest}
    data-show={show}
    className={twMerge('h-9 flex flex-row items-center gap-x-3 md:gap-x-0 bg-transparent rounded-full px-2 overflow-hidden', rest.className)}>
        {children}
    </div>
  )
}

export default InputText