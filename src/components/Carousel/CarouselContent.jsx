import React from 'react'

const CarouselContent = ({title, description}) => {
  return (
    <div className='bg-gradient-to-t from-black from-10% to-transparent to-95% w-full h-36 px-8 py-4 rounded-2xl text-skin-muted hover:text-skin-muted-hover'>
        <h2 className='text-6xl font-medium text-skin-inverted hover:text-skin-inverted-hover'>{title}</h2>
        <h3 className='mt-2 text-lg ml-3 text-skin-muted w-[90%] truncate'>{description}</h3>
    </div>
  )
}

export default CarouselContent