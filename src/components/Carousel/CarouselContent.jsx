import React from 'react'

const CarouselContent = ({title, description}) => {
  return (
    <div className='bg-gradient-to-t from-black from-10% to-transparent to-95% w-full h-32 xl:h-auto px-4 pb-4 rounded-2xl'>
        <h2 className='font-medium mb-2 text-skin-inverted indent-2 text-justify hover:text-skin-inverted-hover text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>{title}</h2>
    </div>
  )
}

export default CarouselContent