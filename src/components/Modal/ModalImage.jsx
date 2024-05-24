import React from 'react'

const ModalImage = ({url}) => {
  return (
    <div className='w-full h-[45%] rounded-t-xl bg-cover bg-center lg:w-[45%] xl:w-1/2 lg:h-full lg:rounded-none lg:rounded-l-xl flex shrink-0'
        style={{
            backgroundImage: `url(${url})`,
            backgroundRepeat: 'no-repeat'
        }}/>
  )
}

export default ModalImage