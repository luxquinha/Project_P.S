import React from 'react'
import { twMerge } from 'tailwind-merge'

const AboutCard = ({title, desc, img, imgConfig, className }) => {
  return (
    <div className={twMerge('flex flex-col pt-10 items-center flex-nowrap lg:flex-row h-[400px] justify-center md:justify-around w-screen px-8 lg:my-10', className)}>
      <img 
      src={img} 
      alt="img-cel" 
      className={twMerge('h-1/2 w-full md:h-[60%] lg:h-[90%] lg:w-1/3 mb-4 object-contain ', imgConfig)}/>
      <div className='flex flex-col gap-y-5 lg:gap-y-12 w-full lg:w-2/3 h-1/2 lg:h-full justify-center items-center pt-3'>
        <h1 className='text-center text-3xl font-semibold md:text-5xl hover:text-skin-inverted'>{title}</h1>
        <p className='font-medium text-skin-base text-wrap text-justify indent-3 text-xl md:text-2xl'>{desc}</p>
      </div>
    </div>
  )
}

export default AboutCard
