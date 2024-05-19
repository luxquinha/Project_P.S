import React from 'react'
import { Link } from 'react-router-dom'

// hover:text-[#7F7F7F]
const NavbarLink = ({label, route}) => {
  return (
    <div className='font-medium w-24 h-8 justify-center flex items-center rounded-md text-sm text-skin-base hover:font-semibold hover:bg-skin-button-hover hover:shadow-sm'>
        <Link to={route}>{label}</Link>
    </div>
  )
}

export default NavbarLink