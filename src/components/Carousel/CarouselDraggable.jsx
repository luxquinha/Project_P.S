import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { useHighlightsNews } from '../../services/useHttpClient'
import useRequestContext from '../../hooks/useRequest'
import { CategoryNews } from '../Category/index'

const CarouselDraggable = ({children, className, category = ''}) => {
    const dragCar = useRef()
    const [width, setWidth] = useState()
    const {validateNews, newsHighlights, getNewsCache} = useRequestContext()
    const {data, isLoading, status} = useHighlightsNews()

    useEffect(()=>{
      setWidth(dragCar.current?.scrollWidth - dragCar.current?.offsetWidth + 12)
      if(isLoading===false)
        validateNews(data, 'Highlights')
      if(status==='error')
        getNewsCache('Highlights')
    },[])

    if(isLoading){
      return(
        <span className='text-skin-base text-2xl'>Carregando</span>
      )
    }
  return (
    <motion.div 
    ref={dragCar}
    className={twMerge('mx-auto relative overflow-hidden max-w-screen px-4 cursor-grab', className)} 
    whileTap={{cursor: 'grabbing'}}>
      {category!=='' && <h2 className='text-3xl md:text-4xl ml-2 mb-5 font-medium text-skin-inverted cursor-default'>{category}</h2>}
      <motion.div className='flex flex-row gap-x-4' drag='x' dragConstraints={{right: 0, left:-width}}>
        {newsHighlights?.map((n,i)=>(
            <CategoryNews.Line lineNews={n} key={i}/>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default CarouselDraggable