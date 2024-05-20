import React, { useEffect, useState } from 'react'
import useThemeContext from '../hooks/useTheme'
import CarouselPagination from './CarouselPagination'

const Carousel = ({children, autoSlide = false, autoSlideInterval = 5000}) => {

  const {next, current} = useThemeContext()
  const [keepSliding, setKeppSliding] = useState(autoSlide)

  useEffect(()=>{
    if(!autoSlide || !keepSliding) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return ()=>{clearInterval(slideInterval)}
  },[current, keepSliding])

  return (
    <div className='flex flex-col' onMouseOver={()=>(setKeppSliding(false))} onMouseLeave={()=>(setKeppSliding(true))}>
      <div className='max-w-[1400px] h-[500px] w-[98%] flex flex-row mx-auto relative overflow-hidden'>
          {children}
      </div>
      <CarouselPagination/>
    </div>
  )
}

export default Carousel