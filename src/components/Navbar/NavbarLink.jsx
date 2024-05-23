import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

// hover:text-[#7F7F7F]
const NavbarLink = ({label, route, className, icon=null}) => {
  return (
    <Link
    to={route}
    className={twMerge('font-medium w-24 h-8 justify-center gap-x-2 flex items-center rounded-md text-lg text-skin-base hover:font-semibold hover:bg-skin-button-hover hover:shadow-sm', className)}>
      {icon!==null && icon}
      {label}
    </Link>
  )
}

export default NavbarLink