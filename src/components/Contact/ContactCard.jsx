import React from 'react'

const ContactCard = ({title, info, icon}) => {
  return (
    <div className='w-[370px] md:w-[350px] lg:w-1/3 lg:h-[340px] flex flex-col items-center scale-90 hover:scale-100 justify-center gap-y-8 p-3 mb-3 md:mb-0 bg-skin-secondary h-[300px] rounded-xl hover:shadow-xl'>
      <div className='scale-[1.7]'>
        {icon}
      </div>
      <h4 className='text-2xl text-skin-base hover:text-skin-hover font-bold'>{title}</h4>
      <span className='text-skin-base hover:text-skin-hover text-xl font-medium'>{info}</span>
    </div>
  )
}

export default ContactCard
