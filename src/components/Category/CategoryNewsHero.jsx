import React from 'react'
import { Card } from '../Card/index'
import { Modal } from '../Modal/index'
import useThemeContext from '../../hooks/useTheme'
import { Eye } from 'lucide-react'


const CategoryNewsHero = ({mainNews}) => {

  const { handleModal } = useThemeContext()

  return (
    <div className="flex flex-row flex-wrap px-4 h-[90%] gap-x-2 mt-2">
        {/* Card principal */}
        <Card.Root className='flex-grow basis-[49%] h-[320px] lg:h-[570px] shrink flex-col hover:cursor-default bg-transparent'>
          <Card.Content 
          title={mainNews[0]?.title} 
          description={mainNews[0]?.description} 
          className='z-10 px-3 h-1/5'
          titleStyle='text-2xl md:text-3xl absolute top-0 w-[90%] text-skin-base hover:text-skin-base-hover lg:text-skin-inverted lg:hover:text-skin-inverted-hover lg:static'
          descriptionStyle='hidden lg:flex'
          />
          <Card.Image url={mainNews[0]?.urlToImage} className='absolute rounded-lg lg:hover:scale-110 duration-1000 lg:h-full'/>
          <Modal.Trigger action={()=>(handleModal(mainNews[0]))} icon={<Eye size={18}/>} className='right-2 top-2 w-6 h-6'/>
        </Card.Root>
        {/* Cards secundários */}
        <div className='flex flex-col mt-2 lg:mt-0 justify-around items-start lg:items-center gap-y-2 w-screen lg:w-[40%]'>
            {mainNews?.map((n, i)=>(
              i!==0 &&
            <Card.Root className='flex-row w-[93%] sm:w-[96%] lg:w-[98%] h-[150px] lg:h-[135px] justify-around items-center duration-500 lg:scale-95 hover:scale-100 hover:shadow-2xl hover:bg-skin-button-hover' key={i}>
                <Card.Image url={n.urlToImage} className='w-1/3 md:w-1/4 h-full'/>
                <Card.Content 
                title={n.title}
                description={n.description}
                className='bg-gradient-to-tr from-transparent to-transparent w-3/4 px-3 mt-2'
                titleStyle='text-xl'
                descriptionStyle='text-sm h-11 text-skin-base font-medium'
                />
                <Modal.Trigger action={()=>(handleModal(n))} icon={<Eye size={16}/>} className='right-2 top-1 hover:bg-skin-primary hover:shadow-md bg-transparent w-6 h-6'/>
            </Card.Root>
            ))}
        </div>
    </div>
  )
}

export default CategoryNewsHero