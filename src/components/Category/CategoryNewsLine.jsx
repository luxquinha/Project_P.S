import React from 'react'
import { Card } from '../Card/index'

const CategoryNewsLine = ({lineNews}) => {
  return (
    <>
      <Card.Root className='w-[24.5%] h-[300px] flex-row shrink-0 items-end overflow-hidden hover:cursor-grab'
      whileTap={{cursor: 'grabbing'}}>
          <Card.Content 
          title={lineNews.title} 
          className='z-10 px-3 h-1/4'
          titleStyle='text-xl'
          descriptionStyle='text-sm'
          />
          <Card.Image url={lineNews.url} className='absolute rounded-lg'/>
      </Card.Root>
    </>
  )
}

export default CategoryNewsLine