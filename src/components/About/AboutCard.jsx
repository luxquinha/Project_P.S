import React from 'react'
import { twMerge } from 'tailwind-merge'

const AboutCard = ({title, desc, img, imgConfig, className }) => {
  return (
    <div className={twMerge('flex flex-row h-[400px] justify-around w-screen px-8 my-10', className)}>
      <img 
      src={img} 
      alt="img-cel" 
      className={twMerge('h-[90%] w-1/3 mb-4 object-contain ', imgConfig)}/>
      <div className='flex flex-col gap-y-12 w-2/3 h-full justify-center items-center'>
        <h1 className='text-center text-2xl font-semibold md:text-5xl hover:text-skin-inverted'>{title}</h1>
        <p className='font-medium text-skin-base text-wrap text-justify indent-3 md:text-2xl'>{desc}</p>
      </div>
    </div>
  )
}

export default AboutCard
