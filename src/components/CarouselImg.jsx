import React from 'react'
import useThemeContext from '../hooks/useTheme'

const CarouselImg = ({url, children}) => {
  const {current} = useThemeContext()

  return (
    <div style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: 'no-repeat',
        transform: `translateX(-${current * 100}%)`}}
        className="w-full h-full rounded-2xl bg-center bg-cover transition-transform ease-out duration-1000 flex flex-col flex-shrink-0 justify-end relative"
        >
        {children}
    </div>
  )
}

export default CarouselImg