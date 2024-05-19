import React from 'react'
import { Navbar } from '../components/Navbar/index'
import { InputText } from '../components/InputText/index'
import {Search} from 'lucide-react'
import useThemeContext from '../hooks/useTheme.js'
import { useForm } from 'react-hook-form'

const AboutPage = () => {
  const { handleHoverAction} = useThemeContext()
  const { handleSubmit, register} = useForm()

  const handleSearch = (params) =>{
    console.log(params);
  }
  return (
    <div>
        <header>
            <Navbar.Root className='grid grid-cols-6 justify-around'>
              <Navbar.Logo/>
              <Navbar.Links className='col-span-2 col-start-3'>
                <Navbar.Link label={'Home'} route={'/'}/>
                <Navbar.Link label={'About'} route={'/sobre'}/>
                <Navbar.Link label={'Contact'} route={'/contato'}/>
              </Navbar.Links>
              <InputText.Root className='justify-self-end col-span-2 col-start-5'>
                <form onSubmit={handleSubmit(handleSearch)} className='flex flex-row justify-between items-center'>
                  <InputText.Label type={'text'} placeholder={'Type here to search'}
                  register={register}
                  />
                </form>
                <InputText.Action icon={<Search size={18}/>} 
                action={handleHoverAction}
                type='submit'
                />
              </InputText.Root>
            </Navbar.Root>
        </header>
      <main>
          <h1>Sobre nós</h1>
        </main>
    </div>
  )
}

export default AboutPage