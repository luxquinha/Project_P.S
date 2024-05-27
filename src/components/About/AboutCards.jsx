import React from 'react'

const AboutCards = ({children}) => {
  return (
    <div className='flex flex-col w-full lg:h-[80%] gap-y-6 lg:gap-x-4 lg:justify-around items-center'>
      {children}
    </div>
  )
}

export default AboutCards
