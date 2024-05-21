import React from 'react'

const ModalContent = ({title, description, children}) => {
  return (
    <div className='flex flex-col items-center px-1 py-2 gap-y-3 justify-around'>
        <h1 className='text-skin-base text-3xl font-medium text-wrap w-full h-[10%] mt-3 text-center'>{title}</h1>
        <p className='text-skin-base text-lg indent-3 overflow-y-scroll w-full h-1/2 mt-3'>{description}</p>
        {children}
    </div>
  )
}

export default ModalContent