import React from 'react'

const CarouselContent = ({title, description}) => {
  return (
    <div className='bg-gradient-to-t from-black from-10% to-transparent to-95% w-full h-28 xl:h-32 2xl:h-36 px-8 py-4 rounded-2xl'>
        <h2 className='font-medium text-skin-inverted hover:text-skin-inverted-hover text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>{title}</h2>
        <h3 className='hidden md:static mt-1 md:mt-2 ml-3 text-skin-muted w-[90%] truncate md:text-base xl:text-lg 2xl:text-xl'>{description}</h3>
    </div>
  )
}

export default CarouselContent