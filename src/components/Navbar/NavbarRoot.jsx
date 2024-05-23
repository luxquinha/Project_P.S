import React from 'react'
import { twMerge } from 'tailwind-merge'

const NavbarRoot = ({children, ...rest}) => {
  return (
    <div {...rest} className={twMerge('h-16 bg-skin-primary fixed top-0 left-0 right-0 z-20 shadow-2xl border-skin-primary border-opacity-0 items-center px-3', rest.className)}>
        {children}
    </div>
  )
}

export default NavbarRoot