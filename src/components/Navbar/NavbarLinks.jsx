import React from 'react'
import { twMerge } from 'tailwind-merge'

const NavbarLinks = ({children, className}) => {
  return (
    <div className={twMerge('flex flex-row w-full items-center justify-around justify-self-center', className)}>
        {children}
    </div>
  )
}

export default NavbarLinks