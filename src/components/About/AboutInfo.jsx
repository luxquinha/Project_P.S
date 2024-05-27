import React from 'react'
import { twMerge } from 'tailwind-merge'

const AboutInfo = ({title, description='', subTitle='', children, className, titlesStyle}) => {
  return (
    <section className={twMerge('min-h-screen w-full flex flex-col lg:flex-row items-center justify-evenly lg:justify-evenly', className)}>
      <div className={twMerge('flex flex-col w-[90%] lg:w-[60%] lg:px-4 justify-evenly items-center gap-y-10 lg:gap-y-20', titlesStyle)}>
        <h1 className='text-skin-base text-4xl md:text-6xl lg:text-7xl font-semibold tracking-widest'>{title}</h1>
        {description!== '' && <p className='text-skin-base text-lg md:text-2xl font-medium tracking-wide text-justify indent-3'>{description}</p>}
        {subTitle!== '' && <h1 className='text-skin-base text-3xl md:text-5xl font-semibold self-start tracking-widest'>{subTitle}</h1>}
      </div>
      {children}
    </section>
  )
}

export default AboutInfo
