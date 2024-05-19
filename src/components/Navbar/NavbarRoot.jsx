import React from 'react'
import { twMerge } from 'tailwind-merge'

const NavbarRoot = ({children, ...rest}) => {
  return (
    <div {...rest} className={twMerge('w-full h-14 bg-skin-primary shadow-xl border-b border-skin-primary border-opacity-0 items-center px-3', rest.className)}>
        {children}
    </div>
  )
}

export default NavbarRoot