import React from 'react'
import useThemeContext from '../hooks/useTheme'

const CarouselPagination = () => {
    const {slides, current, setCurrent} = useThemeContext()

  return (
    <div className='w-full h-11 flex items-center justify-center gap-x-2'>
        {slides.map((_, i)=>(
            <button 
            onClick={()=>(setCurrent(i))}
            className={`w-6 h-1 bg-skin-secondary rounded-lg duration-1000 ${current===i && 'bg-skin-terciary scale-125'}`} 
            key={i}
            
            ></button>
        ))}
    </div>
  )
}

export default CarouselPagination