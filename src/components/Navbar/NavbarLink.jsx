import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLink = ({label, route}) => {
  return (
    <div className='font-medium text-sm text-zinc-700 hover:text-slate-200 hover:font-semibold'>
        <Link to={route}>{label}</Link>
    </div>
  )
}

export default NavbarLink