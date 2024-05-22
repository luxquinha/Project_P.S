import React from 'react'
import { Card } from '../Card/index'


const CategoryNewsHero = ({mainNews}) => {
  return (
    <div className="flex flex-row px-4 h-[90%] gap-x-2 mt-2">
        {/* Card principal */}
        <Card.Root className='w-3/5 h-full shrink flex-col'>
            <Card.Content 
            title={mainNews[0].title} 
            description={mainNews[0].description} 
            className='z-10 px-3 h-1/5'
            titleStyle='text-3xl'
            />
            <Card.Image url={mainNews[0].url} className='absolute rounded-lg'/>
        </Card.Root>
        {/* Cards secundários */}
        <div className='w-2/5 flex flex-col justify-around gap-y-2'>
            {mainNews.map((n, i)=>(
              i!==0 &&
            <Card.Root className='flex-row w-full h-[23%] justify-around items-center duration-500 hover:scale-y-105 hover:shadow-lg' key={i}>
                <Card.Image url={n.url} className='w-1/4 hover:scale-105'/>
                <Card.Content 
                title={n.title}
                description={n.description}
                className='bg-gradient-to-tr from-transparent to-transparent w-3/4 px-3 mt-2'
                titleStyle='text-xl'
                descriptionStyle='text-sm h-11 text-skin-base font-medium'
                />
            </Card.Root>
            ))}
        </div>
    </div>
  )
}

export default CategoryNewsHero