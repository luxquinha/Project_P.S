import React, { useEffect, useState } from 'react'
import useThemeContext from '../../hooks/useTheme'
import { twMerge } from 'tailwind-merge'

const CarouselRoot = ({children, autoSlide = false, autoSlideInterval = 5000, slidePagination = false,className}) => {

  const {next, slideNews, current, setCurrent} = useThemeContext()
  const [keepSliding, setKeppSliding] = useState(autoSlide)

  useEffect(()=>{
    if(!autoSlide || !keepSliding) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return ()=>{clearInterval(slideInterval)}
  },[current, keepSliding])

  return (
    <div className='flex flex-col relative' onMouseOver={()=>(setKeppSliding(false))} onMouseLeave={()=>(setKeppSliding(true))}>
      <div className={twMerge('flex flex-row mx-auto relative overflow-hidden', className)}>
          {children}
      </div>
      {/* Amostra as páginações do carousel*/}
      {slidePagination && (
        <div className='absolute inset-x-[50%] lg:static'>
          <div className='w-full h-6 flex flex-row items-center justify-center gap-x-2'>
              {slideNews.map((_, i)=>(
                <div className='w-4 lg:w-8 h-4 hover:cursor-pointer bg-transparent flex items-center justify-center'
                onClick={()=>(setCurrent(i))}
                key={i}
                >
                  <button 
                  className={`w-2 h-2 lg:w-6 lg:h-1 bg-skin-secondary rounded-full lg:rounded-lg duration-1000 ${current===i && 'bg-skin-terciary scale-125'}`} 
                  />
                </div>
              ))}
          </div>
        </div>)}
    </div>
  )
}

export default CarouselRoot