import React, { useEffect } from 'react'
import { Navbar } from './components/Navbar/index.jsx'
import { InputText } from './components/InputText/index'
import useThemeContext from './hooks/useTheme.js'
import { Outlet } from 'react-router-dom'
// icones:
import { TbMenu2 } from "react-icons/tb"
import { X, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { Footer } from './components/Footer/index.jsx'

const App = () => {
  const { theme, setTheme,openSideBar,setOpenSideBar } = useThemeContext()

  useEffect(()=>{
    if(localStorage.theme === undefined)
      localStorage.setItem('theme', JSON.stringify('theme-light'))
    else
      setTheme(localStorage.getItem('theme'))
  },[])

  return (
    <div className={`${theme} relative`}>
        <header>
            <Navbar.Root className='hidden md:grid grid-cols-8 gap-x-2 justify-center'>
              <Navbar.Logo/>
              <Navbar.Links className='col-span-3 col-start-3 justify-self-end'>
                <Navbar.Link label={'Home'} route={'/'}/>
                <Navbar.Link label={'About us'} route={'/sobre'}/>
                <Navbar.Link label={'Contact'} route={'/contato'}/>
              </Navbar.Links>
              <Navbar.ToggleTheme iconSize={14}/>
              <Navbar.Search
              rootStyle='justify-self-stretch col-span-2 col-start-7 px-4'
              iconSize={23}
              />
            </Navbar.Root>

            <Navbar.Root className='flex flex-row items-center justify-between md:hidden'>
              <InputText.Root>
                <InputText.Action 
                icon={openSideBar ? <X size={35}/> : <TbMenu2 size={35}/>} 
                action={()=>(setOpenSideBar(prev => !prev))}
                className='w-auto h-auto text-skin-inverted hover:text-skin-inverted hover:bg-transparent hover:scale-110 transition ease-in-out duration-700' 
                />
              </InputText.Root>
              <Navbar.Logo/>
              <Navbar.ToggleTheme iconSize={23}/>
            </Navbar.Root>
        </header>
        {openSideBar && <Navbar.Side/>}
        <main className='bg-skin-primary min-h-screen min-w-full pt-20'>
            <Outlet/>
        </main>
        <footer className='bg-skin-secondary bg-opacity-30 text-skin-base pb-2 pt-2 h-[200px] flex flex-col items-center justify-center'>
            <div className = 'flex flex-row items-center justify-center gap-x-4 pt-3'>
                <Footer.Icon icon={<Facebook size={26}/>}/>
                <Footer.Icon icon={<Instagram size={26}/>}/>
                <Footer.Icon icon={<Twitter size={26}/>}/>
                <Footer.Icon icon={<Linkedin size={26}/>}/>
            </div>
            <div className='flex flex-row items-center justify-center gap-x-4 pt-4'>
                <div className='flex flex-row items-center justify-center'>
                  <Phone size={23}/>
                  <span className='text-skin-base text-lg font-medium'>(00) 91234-5678</span>
                </div>
                <div className='flex flex-row items-center justify-center'>
                  <Mail size={23}/>
                  <span className='text-skin-base text-lg font-medium'>@WorldNews</span>
                </div>
            </div>
        </footer>
        
    </div>
  )
}

export default App