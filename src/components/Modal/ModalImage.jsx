import React from 'react'

const ModalImage = ({url}) => {
  return (
    <div className='w-1/2 h-full bg-cover bg-center rounded-l-xl flex shrink-0'
        style={{
            backgroundImage: `url(${url})`,
            backgroundRepeat: 'no-repeat'
        }}/>
  )
}

export default ModalImage