import React from 'react'
import Carousel from '../components/Carousel'
import CarouselImg from '../components/CarouselImg'
import {Button} from '../components/Button/index'
import useThemeContext from '../hooks/useTheme'
import { ChevronRight, ChevronLeft } from 'lucide-react'
// https://newsapi.org/v2/top-headlines?country=br&category=&apiKey=API_KEY
const HomePage = () => {
  const {slides, prev, next} = useThemeContext()
  return (
    <main className='bg-skin-primary text-skin-base'>
      <Carousel autoSlide={true} autoSlideInterval={10000}>
        {slides.map((s, i)=>(
          <CarouselImg url={s} key={i}>
            <div className='bg-gradient-to-t from-black from-10% to-transparent to-95% w-full h-36 px-8 py-4 rounded-2xl text-skin-muted hover:text-skin-muted-hover'>
              <h2 className='text-6xl font-medium text-yellowLogo'>Titulo que vem do card da noticia</h2>
              <h3 className='text-lg ml-3'>Aqui irá a descrição da reportagem que será anunciada nesse slider, com algumas palavras e um botão de 'read more'</h3>
            </div>
            <div className='absolute inset-1 flex flex-row justify-between items-center'>
              <Button.Root className='hover:text-skin-hover items-center'>
                <Button.Icon icon={<ChevronLeft size={60}/>} action={prev}/>
              </Button.Root>
              <Button.Root className='hover:text-skin-hover items-center'>
                <Button.Icon icon={<ChevronRight size={60}/>} action={next}/>
              </Button.Root>
            </div>
          </CarouselImg>
        ))}
      </Carousel>
    </main>
  )
}

export default HomePage