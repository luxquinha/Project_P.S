import React from 'react'
import useThemeContext from '../../hooks/useTheme'
import {Card} from '../Card/index'

const CategoryNews = ({category}) => {
    // const infoCard = {
    //     url: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww",
    //     title: 'Título da Notícia',
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    // }
    const {slideNews} = useThemeContext()

  return (
    <div className='w-full h-screen mt-4'>
        <h2 className='text-3xl ml-5 font-medium text-skin-inverted'>{category}</h2>
        <div className="flex flex-row px-4 h-[60%] gap-x-2 mt-2">
            {/* Card principal */}
            <Card.Root className='w-3/5 h-full shrink flex-col'>
                <Card.Content 
                title={slideNews[0].title} 
                description={slideNews[0].description} 
                className='z-10 px-3 h-1/5'
                titleStyle='text-3xl'
                />
                <Card.Image url={slideNews[0].url} className='absolute rounded-lg'/>
            </Card.Root>
            {/* Cards secundários */}
            <div className='w-2/5 flex flex-col gap-y-2'>
                {slideNews.map((n, i)=>(
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
        {/* Cards Terciários */}
        <div className='h-[32%] flex flex-row flex-wrap gap-x-2 gap-y-2 px-4 mt-2 justify-start'>
            {slideNews.map((n, i)=>(
            <Card.Root className='w-[24.5%] h-[95%] shrink-0 flex-row items-end duration-500 hover:scale-105 hover:shadow-lg' key={i}>
                <Card.Content 
                title={n.title} 
                description={n.description} 
                className='z-10 px-3 h-14'
                titleStyle='text-xl'
                descriptionStyle='text-sm'
                />
                <Card.Image url={n.url} className='absolute rounded-lg'/>
            </Card.Root>
            ))}
        </div>
    </div>
  )
}

export default CategoryNews