import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const CarouselDraggable = ({children, className, category = ''}) => {
    const [width, setWidth] = useState(0)
    const dragCar = useRef()

    useEffect(()=>{
        setWidth(dragCar.current?.scrollWidth - dragCar.current?.offsetWidth + 12)
    },[])

  return (
    <motion.div 
    ref={dragCar}
    className={twMerge('mx-auto relative overflow-hidden max-w-screen px-4 cursor-grab', className)} 
    whileTap={{cursor: 'grabbing'}}>
      {category!=='' && <h2 className='text-4xl ml-2 mb-5 font-medium text-skin-inverted'>{category}</h2>}
      <motion.div className='flex flex-row gap-x-3' drag='x' dragConstraints={{right: 0, left:-width}}>
          {children}  
      </motion.div>
    </motion.div>
  )
}

export default CarouselDraggable