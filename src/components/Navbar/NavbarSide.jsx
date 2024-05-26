import React from 'react'
import { Navbar } from './index'
import useThemeContext from '../../hooks/useTheme'

const NavbarSide = () => {
  const {setOpenSideBar, menus} = useThemeContext()
  

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