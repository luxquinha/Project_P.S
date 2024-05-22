import React from 'react'
import { Card } from '../Card/index'

const CategoryNewsLine = ({lineNews}) => {
  return (
    <>
      <Card.Root className='w-[24.5%] h-[93%] flex-row shrink-0 items-end duration-500 hover:scale-105 hover:shadow-lg'>
          <Card.Content 
          title={lineNews.title} 
          description={lineNews.description} 
          className='z-10 px-3 h-14'
          titleStyle='text-xl'
          descriptionStyle='text-sm'
          />
          <Card.Image url={lineNews.url} className='absolute rounded-lg'/>
      </Card.Root>
    </>
  )
}

export default CategoryNewsLine