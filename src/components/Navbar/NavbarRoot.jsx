import React from 'react'
import { twMerge } from 'tailwind-merge'

const NavbarRoot = ({children, ...rest}) => {
  return (
    <div {...rest} className={twMerge('w-full h-12 bg-skin-primary shadow-xl border-b border-zinc-300 items-center px-3', rest.className)}>
        {children}
    </div>
  )
}

export default NavbarRoot