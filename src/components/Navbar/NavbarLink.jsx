import React from 'react'
import { useNavigate } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

// hover:text-[#7F7F7F]
const NavbarLink = ({label, route, className, action=null, icon=null}) => {
  const navigateTo = useNavigate()

  const handleClick = ()=>{
    if(action!==null){
      action()
    }
    navigateTo(route)
  }

  return (
    <button
    onClick={handleClick}
    className={twMerge('font-medium w-24 h-8 lg:w-32 lg:h-10 justify-center gap-x-2 flex items-center rounded-md text-lg text-skin-base hover:font-semibold hover:bg-skin-button-hover hover:shadow-sm', className)}>
      {icon!==null && icon}
      {label}
    </button>
  )
}

export default NavbarLink