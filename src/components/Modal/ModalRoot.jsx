import React from 'react'
import useThemeContext from '../../hooks/useTheme'

const ModalRoot = ({children}) => {

  const { openModal } = useThemeContext()

  return (
    <div>
      {openModal && (
      <div className='fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-30 flex items-center justify-center duration-1000'>
          {children}
      </div>
      )}
    </div>
  )
}

export default ModalRoot