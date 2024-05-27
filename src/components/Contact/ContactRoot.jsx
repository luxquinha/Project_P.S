import React from 'react'

const ContactRoot = ({children}) => {
  return (
    <div className='min-h-fit w-screen px-4 py-2 flex flex-row flex-wrap items-center justify-center gap-x-2 pb-4'>
      {children}
    </div>
  )
}

export default ContactRoot
