import React from 'react'
import { Card } from '../Card/index'
import { Modal } from '../Modal'
import { Eye } from 'lucide-react'
import useThemeContext from '../../hooks/useTheme'

const CategoryNewsLine = ({lineNews}) => {

  const {handleModal} = useThemeContext()

  return (
    <>
      <Card.Root className='flex-row shrink-0 items-end hover:cursor-grab w-full h-[320px] md:w-[49.5%] lg:w-[32.7%] xl:h-[380px] rounded-2xl'
      whileTap={{cursor: 'grabbing'}}>
          <Card.Content 
          title={lineNews.title} 
          className='z-10 px-3 h-1/3 justify-center '
          titleStyle='text-2xl xl:text-3xl'
          />
          <Card.Image url={lineNews.url} className='absolute rounded-lg h-full'/>
          <Modal.Trigger action={()=>(handleModal(lineNews))} icon={<Eye size={18}/>} className='right-3 top-3 scale-125 lg:scale-100 lg:right-2 lg:top-2'/>
      </Card.Root>
    </>
  )
}

export default CategoryNewsLine