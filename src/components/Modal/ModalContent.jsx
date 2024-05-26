import React from 'react'

const ModalContent = ({title, description, children}) => {
  return (
    <div className='flex flex-col items-center h-[55%] lg:h-full px-3 py-2 gap-y-2 lg:gap-y-3 justify-around'>
        <h1 className='text-skin-inverted text-2xl md:text-3xl font-medium text-wrap w-full h-auto mt-1 lg:mt-4 indent-3 text-justify'>{title}</h1>
        <p className='text-skin-base sm:text-base md:text-lg indent-3 w-full h-1/3 mt-1 lg:mt-3'>{description}</p>
        {children}
    </div>
  )
}

export default ModalContent