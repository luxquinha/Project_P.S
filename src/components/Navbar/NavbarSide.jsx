import React from 'react'
import { BsBookmarkFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaHeart, FaHouse } from 'react-icons/fa6'
import { GiDiamondsSmile, GiGreatWarTank, GiHealthNormal } from 'react-icons/gi'
import { ImProfile } from 'react-icons/im'
import { MdSportsBasketball } from 'react-icons/md'
import { PiCircuitryFill } from 'react-icons/pi'
import { Navbar } from './index'

const NavbarSide = () => {

  return (
    <div className='fixed top-[58px] bottom-0 left-0 right-0 bg-black bg-opacity-75 z-30 md:hidden'> 
        <Navbar.Links className='w-[90%] h-[calc(100vh - 62px)] bg-skin-primary pb-9 pt-5'>
            <div className='flex flex-col mx-auto w-[90%] h-full justify-start gap-y-2'>
                <Navbar.Search 
                rootStyle='w-full flex-row-reverse'
                formStyle='h-7'
                actionStyle='w-[10%]'
                iconSize={24}
                />
                <Navbar.Link label={'Home'} route={'/'} icon={<FaHouse size={22}/>} className='w-full px-2 justify-start h-12 text-lg'/>
                <Navbar.Link label={'About'} route={'/sobre'} icon={<ImProfile size={22}/>} className='w-full px-2 justify-start h-12 text-lg'/>
                <Navbar.Link label={'Contact'} route={'/contato'} icon={<FaPhoneAlt size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
                <h3 className='w-full font-medium text-skin-base text-center h-8 text-lg uppercase'>Categorias</h3>
                <Navbar.Link label={'Esporte'} route={'#'} icon={<MdSportsBasketball size={22}/>} className='w-full px-2 justify-start h-12 text-lg'/>
                <Navbar.Link label={'Tecnologia'} route={'#'} icon={<PiCircuitryFill size={22}/>} className='w-full px-2 justify-start h-12 text-lg'/>
                <Navbar.Link label={'Entretenimento'} route={'#'} icon={<GiDiamondsSmile size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
                <Navbar.Link label={'Saúde'} route={'#'} icon={<GiHealthNormal size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
                <Navbar.Link label={'Guerra'} route={'#'} icon={<GiGreatWarTank size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
                <h3 className='w-full font-medium text-skin-base text-center h-8 text-lg uppercase'>Mais</h3>
                <Navbar.Link label={'Salvos'} route={'#'} icon={<BsBookmarkFill size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
                <Navbar.Link label={'Curtidos'} route={'#'} icon={<FaHeart size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
            </div>
        </Navbar.Links>
    </div>
  )
}

export default NavbarSide