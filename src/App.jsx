import React, { useState } from 'react'
import { Navbar } from './components/Navbar/index.jsx'
import { InputText } from './components/InputText/index'
import {Search, Sun, Moon} from 'lucide-react'
import useThemeContext from './hooks/useTheme.js'
import { useForm } from 'react-hook-form'
import { Outlet } from 'react-router-dom'
import { TbMenu2 } from "react-icons/tb"
import { FaHouse } from "react-icons/fa6"
import { ImProfile } from "react-icons/im"
import { FaPhoneAlt } from "react-icons/fa"
import { MdSportsBasketball } from "react-icons/md"
import { PiCircuitryFill } from "react-icons/pi"
import { GiDiamondsSmile } from "react-icons/gi"
import { GiHealthNormal } from "react-icons/gi"
import { GiGreatWarTank } from "react-icons/gi"
import { FaHeart } from "react-icons/fa6"
import { BsBookmarkFill } from "react-icons/bs"
import { X } from 'lucide-react'

const App = () => {
    const { setShow, show, theme, handleToggleTheme} = useThemeContext()
    const { handleSubmit, register} = useForm()
    const [openSideBar,setOpenSideBar] = useState(false)

    const handleSearch = (params) =>{
        console.log(params);
    }
  return (
    <div className={`${theme} relative`}>
        <header>
            <Navbar.Root className='hidden md:grid grid-cols-8 justify-around'>
              <Navbar.Logo/>
              <Navbar.Links className='col-span-3 col-start-3'>
                <Navbar.Link label={'Home'} route={'/'}/>
                <Navbar.Link label={'About'} route={'/sobre'}/>
                <Navbar.Link label={'Contact'} route={'/contato'}/>
              </Navbar.Links>
              <InputText.Root className='col-span-1 col-end-7'>
                <InputText.Action icon={theme==='theme-light' ? <Sun size={18}/> :(theme==='theme-dark' && <Moon size={18}/>)}
                className='text-skin-icon-secondary  hover:text-skin-icon-secondary-hover'
                action={handleToggleTheme}
                />
              </InputText.Root>
              <InputText.Root 
                onMouseOver={()=>{setShow(true)}}
                onBlur={()=>{setShow(false)}}
                data-show={show}
                className='justify-self-end col-span-2 col-start-7 data-[show=true]:bg-skin-button-hover'>
                <form onSubmit={handleSubmit(handleSearch)} className='flex flex-row justify-between items-center'>
                  <InputText.Label type={'text'} placeholder={'Type here to search'}
                  register={register}
                  />
                </form>
                <InputText.Action icon={<Search size={18}/>} 
                action={()=>{setShow(false)}}
                type='submit'
                />
              </InputText.Root>
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

              <InputText.Root>
                <InputText.Action icon={theme==='theme-light' ? <Sun size={23}/> :(theme==='theme-dark' && <Moon size={23}/>)}
                className='text-skin-icon-secondary w-auto h-auto p-1 hover:scale-105 hover:text-skin-icon-secondary-hover'
                action={handleToggleTheme}
                />
              </InputText.Root>
            </Navbar.Root>
        </header>
        {openSideBar && 
          <div className='fixed top-[58px] bottom-0 left-0 right-0 w-screen h-dvh bg-black bg-opacity-75 z-30 md:hidden'> 
            <Navbar.Links className='w-[90%] h-full bg-skin-primary'>
              <div className='flex flex-col mx-auto w-[90%] h-full pt-6 justify-start gap-y-2'>
                <InputText.Root 
                  onMouseOver={()=>{setShow(true)}}
                  onBlur={()=>{setShow(false)}}
                  data-show={show}
                  className='data-[show=true]:bg-skin-button-hover w-[90%]'>
                  <InputText.Action icon={<Search size={24}/>} 
                  action={()=>{setShow(false)}}
                  type='submit'
                  className='w-[10%]'
                  />
                  <form onSubmit={handleSubmit(handleSearch)} className='flex flex-row w-full h-7 items-center'>
                    <InputText.Label type={'text'} placeholder={'Digite aqui...'}
                    register={register}
                    />
                  </form>
                </InputText.Root>
                <Navbar.Link label={'Home'} route={'/'} icon={<FaHouse size={22}/>} className='w-full px-2 justify-start h-12 text-lg'/>
                <Navbar.Link label={'About'} route={'/sobre'} icon={<ImProfile size={22}/>} className='w-full px-2 justify-start h-12 text-lg'/>
                <Navbar.Link label={'Contact'} route={'/contato'} icon={<FaPhoneAlt size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
                <h3 className='w-full font-medium text-skin-base text-center h-12 text-lg uppercase'>Categorias</h3>
                <Navbar.Link label={'Esporte'} route={'#'} icon={<MdSportsBasketball size={22}/>} className='w-full px-2 justify-start h-12 text-lg'/>
                <Navbar.Link label={'Tecnologia'} route={'#'} icon={<PiCircuitryFill size={22}/>} className='w-full px-2 justify-start h-12 text-lg'/>
                <Navbar.Link label={'Entretenimento'} route={'#'} icon={<GiDiamondsSmile size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
                <Navbar.Link label={'Saúde'} route={'#'} icon={<GiHealthNormal size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
                <Navbar.Link label={'Guerra'} route={'#'} icon={<GiGreatWarTank size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
                <h3 className='w-full font-medium text-skin-base text-center h-12 text-lg uppercase'>Mais</h3>
                <Navbar.Link label={'Salvos'} route={'#'} icon={<BsBookmarkFill size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
                <Navbar.Link label={'Curtidos'} route={'#'} icon={<FaHeart size={22}/>} className='w-full px-2 justify-start h-12 text-lg '/>
              </div>
            </Navbar.Links>
          </div>
        }
        <main className='bg-skin-primary min-h-screen min-w-full pt-20'>
            <Outlet/>
        </main>
        <footer className='bg-skin-secondary bg-opacity-30 text-skin-base'>
            <span>rodapé</span>
        </footer>
        
    </div>
  )
}

export default App