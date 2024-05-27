import React from 'react'
import Tablet from '../assets/tablet.png'
import TabletD from '../assets/tablet-dark.png'
import Laptop from '../assets/laptop.png'
import LaptopM from '../assets/laptop-modal.png'
import Cel from '../assets/celular.png'
import CelM from '../assets/celular-modal.png'
import Logo1 from '../assets/Logo-Light.png'
import Logo2 from '../assets/Logo-Dark.png'
import useThemeContext from '../hooks/useTheme'
import { About } from '../components/About'

const AboutPage = () => {
  const {theme} = useThemeContext()

  return (
    <section className='bg-skin-primary text-skin-base overflow-hidden px-3 lg:px-10'>
      <About.Info
      title='Who are we?'
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      className='h-screen'
      >
        <img 
        src={theme==='theme-light'? Logo1 : Logo2} 
        alt="Logotipo" 
        className='h-auto w-[90%] lg:h-2/3 lg:w-auto'/>
      </About.Info>

      <About.Info
      title='Why choose us?'
      subTitle='Compatibility'
      className='lg:flex-col gap-y-3 lg:gap-y-5 mb-20'
      titlesStyle='lg:w-[90%] lg:px-4 mb-6'
      >
        <About.Cards>
          <About.Card img={Cel} title='Smartphone' 
          className='lg:flex-row-reverse'
          imgConfig='scale-125'
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />
          <About.Card img={Tablet} title='Tablets' 
          imgConfig='scale-125'
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />
          <About.Card img={Laptop} title='Laptop' 
          className='lg:flex-row-reverse'
          imgConfig='scale-110'
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />
        </About.Cards>
      </About.Info>

      <About.Info
      title='What do we offer?'
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      className='lg:flex-row-reverse lg:mb-0 gap-y-8'
      >
        <div className='flex flex-col h-[65%] lg:h-[90%] lg:w-1/3 gap-y-5 lg:gap-y-4 items-center justify-evenly lg:justify-center'>
          <img 
          src={Laptop} 
          alt="img-tablet" 
          className='h-auto w-[90%] lg:h-auto lg:w-full'/>
          <img 
          src={LaptopM} 
          alt="img-tablet" 
          className='h-auto w-[90%] lg:h-auto lg:w-full'/>
        </div>
      </About.Info>

      <About.Info
      subTitle='Some functionalities'
      className='lg:flex-col gap-y-3 lg:gap-y-5 pb-20'
      titlesStyle='lg:w-[90%] lg:px-4 mb-6'
      >
        <About.Cards>
          <About.Card img={CelM} title='Preview of the News' 
          className='lg:flex-row-reverse'
          imgConfig='scale-125'
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />
          <About.Card img={TabletD} title='Mode Dark' 
          imgConfig='scale-125'
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />
          <About.Card img={LaptopM} title='You can like and save your News' 
          className='lg:flex-row-reverse'
          imgConfig='scale-110'
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
          />
        </About.Cards>
      </About.Info>

    </section>
  )
}

export default AboutPage