import React from 'react'
import Logo1 from '../../assets/Logo-Light.png'
import Logo2 from '../../assets/Logo-Dark.png'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

const NavbarLogo = ({className}) => {
  return (
    <div className={twMerge('flex flex-row gap-x-1 h-12 w-24 justify-self-start', className )}>
      <Link to={'/'} className='mt-1 scale-95 hover:scale-[1] flex justify-center'>
        <img src={Logo1} alt="Logotipo" className='h-12 w-24 object-contain object-center scale-[1.8] mt-1'/>
      </Link>
    </div>
  )
}

export default NavbarLogo