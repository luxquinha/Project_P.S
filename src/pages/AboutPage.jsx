import React from 'react'
import Tablet from '../assets/tablet.png'
import Logo1 from '../assets/Logo-Light.png'
import Logo2 from '../assets/Logo-Dark.png'
import useThemeContext from '../hooks/useTheme'

const AboutPage = () => {
  const {theme} = useThemeContext()

  return (
    <section className='bg-skin-primary text-skin-base'>
      <section className='h-screen w-full flex flex-row items-center justify-around'>
        <div className='flex flex-col w-1/2 justify-evenly items-center gap-y-20'>
          <h1 className='text-skin-base lg:text-6xl font-semibold tracking-widest'>Who are we?</h1>
          <p className='text-skin-base lg:text-2xl font-medium tracking-wide text-justify indent-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <img 
        src={theme==='theme-light'? Logo1 : Logo2} 
        alt="Logotipo" 
        className='h-2/3 w-auto'/>
      </section>
      <section className='h-screen w-full flex flex-row-reverse items-center justify-around'>
        <div className='flex flex-col w-1/2 justify-evenly items-center gap-y-20'>
          <h1 className='text-skin-base lg:text-6xl font-semibold tracking-widest'>What do we offer?</h1>
          <p className='text-skin-base lg:text-2xl font-medium tracking-wide text-justify indent-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <img 
        src={Tablet} 
        alt="img-tablet" 
        className='h-3/4 w-auto'/>
      </section>
    </section>
  )
}

export default AboutPage