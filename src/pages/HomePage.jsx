import React, { useState } from 'react'
import { Navbar } from '../components/Navbar/index'
import { InputText } from '../components/InputText/index'
import {Search, Sun, Moon} from 'lucide-react'
import useThemeContext from '../hooks/useTheme.js'
import { useForm } from 'react-hook-form'

const HomePage = () => {
  const { setShow, show } = useThemeContext()
  const { handleSubmit, register} = useForm()
  const [themeLight, setThemeLight] = useState(true)

  const handleSearch = (params) =>{
    console.log(params);
  }
  return (
    <div>
        <header>
            <Navbar.Root className='grid grid-cols-8 justify-around'>
              <Navbar.Logo/>
              <Navbar.Links className='col-span-2 col-start-4'>
                <Navbar.Link label={'Home'} route={'/'}/>
                <Navbar.Link label={'About'} route={'/sobre'}/>
                <Navbar.Link label={'Contact'} route={'/contato'}/>
              </Navbar.Links>
              <InputText.Root className='justify-end'>
                <InputText.Action icon={themeLight==true ? <Sun size={18}/> : <Moon size={18}/>}
                className='text-white  hover:text-grayLogo col-span-1 col-end-7 '
                action={()=>{setThemeLight(!themeLight)}}
                />
              </InputText.Root>
              <InputText.Root 
                onMouseOver={()=>{setShow(true)}}
                data-show={show}
                className='justify-self-end col-span-2 col-start-7 w-18% data-[show=true]:bg-bgLight'>
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
        </header>
        <main className='bg-zinc-50 bg-opacity-65 h-screen w-screen'>
          <h1>Home</h1>
        </main>
    </div>
  )
}

export default HomePage