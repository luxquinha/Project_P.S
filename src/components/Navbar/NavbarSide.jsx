import React from 'react'
import { BsBookmarkFill } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaHeart, FaHouse } from 'react-icons/fa6'
import { GiDiamondsSmile, GiGreatWarTank, GiHealthNormal } from 'react-icons/gi'
import { ImProfile } from 'react-icons/im'
import { MdSportsBasketball } from 'react-icons/md'
import { PiCircuitryFill } from 'react-icons/pi'
import { Navbar } from './index'
import useThemeContext from '../../hooks/useTheme'

const NavbarSide = () => {
  const {setOpenSideBar} = useThemeContext()
  const menus = [
    {
      title: '',
      menus: [
        {
          id:3,
          label: 'Home',
          route: '/',
          icon: <FaHouse size={22}/>,
        },
        {
          id:4,
          label: 'About us',
          route: '/sobre',
          icon: <ImProfile size={22}/>,
          iconSize: 22,
        },
        {
          id:5,
          label: 'Contact',
          route: '/contato',
          icon: <FaPhoneAlt size={22}/>,
          iconSize: 22,
        }
      ]
    },
    {
      title: 'Categories',
      menus: [
        {
          id:6,
          label: 'Sports',
          route: '/categorias/esporte',
          icon: <MdSportsBasketball size={22}/>,
        },
        {
          id:7,
          label: 'Entertrainment',
          route: '/categorias/entretenimento',
          icon: <GiDiamondsSmile size={22}/>,
        },
        {
          id:8,
          label: 'Technology',
          route: '/categorias/tecnologia',
          icon: <PiCircuitryFill size={22}/>,
        },
        {
          id:9,
          label: 'Health',
          route: '/categorias/saude',
          icon: <GiHealthNormal size={22}/>,
        },
        {
          id:10,
          label: 'Business',
          route: '/categorias/guerra',
          icon: <GiGreatWarTank size={22}/>,
        }
      ]
    }
    ,{
      title: 'More',
      menus: [
        {
          id:11,
          label: 'Saved',
          route: '/minhaAtividade/salvos',
          icon: <BsBookmarkFill size={22}/>,
        },
        {
          id:12,
          label: 'Liked',
          route: '/minhaAtividade/curtidos',
          icon: <FaHeart size={22}/>,
        }
      ]
    },
  ]

  return (
    <div className='fixed top-[58px] bottom-0 left-0 right-0 bg-black bg-opacity-75 z-30 md:hidden'> 
      <Navbar.Links className='w-[90%] h-[calc(100vh - 62px)] bg-skin-primary pb-9 pt-5'>
        <div className='flex flex-col mx-auto w-[90%] h-full justify-start gap-y-2'>
          <Navbar.Search rootStyle='w-full flex-row-reverse' formStyle='h-7' actionStyle='w-[10%]' iconSize={24} />
          {menus.map((obj, i)=>(
            <>
            {obj.title!=='' && (<h3 className='w-full font-medium text-skin-base text-center h-8 text-lg uppercase' key={i}>{obj.title}</h3>)}
            {obj.menus.map((menu)=>(
              <Navbar.Link 
              label={menu.label} 
              route={menu.route} 
              icon={menu.icon} 
              action={()=>(setOpenSideBar(false))}
              className='w-full px-2 justify-start h-12 text-lg' key={menu.id}/>
            ))}
            </>
          ))}
        </div>
      </Navbar.Links>
    </div>
  )
}
export default NavbarSide