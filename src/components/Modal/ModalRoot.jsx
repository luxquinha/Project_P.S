import React from 'react'
import useThemeContext from '../../hooks/useTheme'
import { twMerge } from 'tailwind-merge'

const ModalRoot = ({children, className}) => {

  const { openModal } = useThemeContext()

  return (
    <div>
      {openModal && (
      <div className={twMerge('fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 z-30 flex items-center justify-center duration-1000',className)}>
          {children}
      </div>
      )}
    </div>
  )
}

export default ModalRoot